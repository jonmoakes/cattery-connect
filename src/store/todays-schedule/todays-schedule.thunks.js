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
          "Checking Out": 2,
          "Checking In & Checking Out": 3,
          Staying: 4,
        };

        // Extract the main status for sorting (ignores the slot times)
        const getMainStatus = (status) => {
          if (status.includes("Checking In & Checking Out"))
            return "Checking In & Checking Out";
          if (status.includes("Checking In")) return "Checking In";
          if (status.includes("Checking Out")) return "Checking Out";
          return "Staying";
        };

        // Compare based on the normalized main status
        return (
          statusOrder[getMainStatus(a.status)] -
            statusOrder[getMainStatus(b.status)] ||
          a.customerName.localeCompare(b.customerName)
        );
      });

      //       const bookingsWithStatus = todayBookings.map((booking) => ({
      //         bookingId: booking.bookingId,
      //         customerId: booking.customerId,
      //         customerName: booking.customerName,
      //         status:
      //           booking.checkInDate === today && booking.checkOutDate === today
      //             ? `Checking In
      // (${booking.checkInSlot.toUpperCase()})
      // & Checking Out ( ${booking.checkOutSlot.toUpperCase()} )`
      //             : booking.checkInDate === today
      //             ? `Checking In
      // ( ${booking.checkInSlot.toUpperCase()} )`
      //             : booking.checkOutDate === today
      //             ? `Checking Out
      // ( ${booking.checkOutSlot.toUpperCase()} )`
      //             : "Staying",
      //       }));

      //       const catsResponse = await databases.listDocuments(
      //         databaseId,
      //         catsCollectionId,
      //         [Query.equal("customerId", customerIdsArray)]
      //       );

      //       const catsInToday = catsResponse.documents || [];

      //       const combinedData = bookingsWithStatus.map((booking) => ({
      //         ...booking,
      //         cats: catsInToday
      //           .filter((cat) => cat.customerId === booking.customerId)
      //           .map(({ catsId, catsName, catsFeedingInfo, catsMedicalInfo }) => ({
      //             catsId,
      //             catsName,
      //             catsFeedingInfo,
      //             catsMedicalInfo,
      //           })),
      //       }));

      //       combinedData.sort((a, b) => {
      //         const statusOrder = {
      //           "Checking In": 1,
      //           "Checking Out": 2,
      //           "Checking In & Checking Out": 3,
      //           Staying: 4,
      //         };

      //         return (
      //           statusOrder[a.status] - statusOrder[b.status] ||
      //           a.customerName.localeCompare(b.customerName)
      //         );
      //       });

      return combinedData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
