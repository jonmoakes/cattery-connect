import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";

import {
  databaseId,
  bookingsCollectionId,
  catsCollectionId,
} from "../../constants/constants";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";

export const getTodaysBookingsDataAsync = createAsyncThunk(
  "getTodaysBookingsData",
  async ({ catteryId }, thunkAPI) => {
    try {
      if (!catteryId) {
        throw new Error("No cattery ID provided");
      }

      const today = format(new Date(), "yyyy-MM-dd");

      const bookingsQuery = [
        Query.equal("catteryId", catteryId),
        Query.lessThanEqual("checkInDate", today),
        Query.greaterThanEqual("checkOutDate", today),
      ];

      const bookingsResponse = await databases.listDocuments(
        databaseId,
        bookingsCollectionId,
        bookingsQuery
      );

      const todayBookings = bookingsResponse.documents;
      if (!todayBookings.length) return [];

      const customerIdsArray = todayBookings.map(
        (booking) => booking.customerId
      );

      const bookingsWithStatus = todayBookings.map((booking) => ({
        bookingId: booking.bookingId,
        customerId: booking.customerId,
        customerName: booking.customerName,
        status:
          booking.checkInDate === today && booking.checkOutDate === today
            ? `Checking In 
(${booking.checkInSlot.toUpperCase()}) 
& Checking Out ( ${booking.checkOutSlot.toUpperCase()} )`
            : booking.checkInDate === today
            ? `Checking In
( ${booking.checkInSlot.toUpperCase()} )`
            : booking.checkOutDate === today
            ? `Checking Out
( ${booking.checkOutSlot.toUpperCase()} )`
            : "Staying",
      }));

      const catsResponse = await databases.listDocuments(
        databaseId,
        catsCollectionId,
        [Query.equal("customerId", customerIdsArray)]
      );

      const catsInToday = catsResponse.documents || [];

      const combinedData = bookingsWithStatus.map((booking) => ({
        ...booking,
        cats: catsInToday
          .filter((cat) => cat.customerId === booking.customerId)
          .map(({ catsId, catsName, catsFeedingInfo, catsMedicalInfo }) => ({
            catsId,
            catsName,
            catsFeedingInfo,
            catsMedicalInfo,
          })),
      }));

      combinedData.sort((a, b) => {
        const statusOrder = {
          "Checking In": 1,
          "Checking In & Checking Out": 2, // Combined check-in/out still goes after just check-ins
          "Checking Out": 3,
          Staying: 4,
        };

        // Extract the main status for sorting (ignores slot times)
        const getMainStatus = (status) => {
          if (status.includes("Checking In & Checking Out"))
            return "Checking In & Checking Out";
          if (status.includes("Checking In")) return "Checking In";
          if (status.includes("Checking Out")) return "Checking Out";
          return "Staying";
        };

        const mainStatusA = getMainStatus(a.status);
        const mainStatusB = getMainStatus(b.status);

        // Primary sorting by status order
        const statusComparison =
          statusOrder[mainStatusA] - statusOrder[mainStatusB];

        if (statusComparison !== 0) {
          return statusComparison;
        }

        // Secondary sorting by check-in date to prioritise new arrivals first
        if (a.checkInDate !== b.checkInDate) {
          return new Date(a.checkInDate) - new Date(b.checkInDate);
        }

        // Sorting AM check-ins before PM check-ins**
        if (mainStatusA === "Checking In" && mainStatusB === "Checking In") {
          const slotA = a.status.includes("( AM )") ? 0 : 1; // AM = 0, PM = 1
          const slotB = b.status.includes("( AM )") ? 0 : 1;
          return slotA - slotB; // AM comes first
        }

        // Final fallback sorting by customer name
        return a.customerName.localeCompare(b.customerName);
      });

      return combinedData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
