import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  bookingsCollectionId,
  catsCollectionId,
} from "../../constants/appwrite-constants";

export const getDailyBookingsDataAsync = createAsyncThunk(
  "getDailyBookingsData",
  async ({ catteryId, chosenDate }, thunkAPI) => {
    try {
      if (!catteryId) {
        throw new Error("No cattery ID provided");
      }

      const today = new Date();

      const date = chosenDate
        ? format(chosenDate, "yyyy-MM-dd")
        : format(today, "yyyy-MM-dd");

      const bookingsQuery = [
        Query.equal("catteryId", catteryId),
        Query.lessThanEqual("checkInDate", date),
        Query.greaterThanEqual("checkOutDate", date),
      ];

      const bookingsResponse = await databases.listDocuments(
        databaseId,
        bookingsCollectionId,
        bookingsQuery
      );

      const todayBookings = bookingsResponse.documents;

      //use chosenDate in the UI
      if (!todayBookings.length) return { passedChosenDate: chosenDate };

      const customerIdsArray = todayBookings.map(
        (booking) => booking.customerId
      );

      const bookingsWithStatus = todayBookings.map((booking) => ({
        documentId: booking.$id,
        bookingId: booking.bookingId,
        customerId: booking.customerId,
        customerName: booking.customerName,
        checkedInStatus: booking.checkedInStatus,
        checkedOutStatus: booking.checkedOutStatus,
        status:
          booking.checkInDate === date && booking.checkOutDate === date
            ? `Checking In 
(${booking.checkInSlot.toUpperCase()}) 
& Checking Out ( ${booking.checkOutSlot.toUpperCase()} )`
            : booking.checkInDate === date
            ? `Checking In 
( ${booking.checkInSlot.toUpperCase()} )`
            : booking.checkOutDate === date
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

      if (!catsInToday.length) {
        throw new Error("cat data missing");
      }

      const combinedData = bookingsWithStatus.map((booking) => ({
        ...booking,
        cats: catsInToday
          .filter((cat) => cat.customerId === booking.customerId)
          .map(
            ({
              catsId,
              catsName,
              catsFeedingInfo,
              catsMedicalInfo,
              catsBehaviourInfo,
            }) => ({
              catsId,
              catsName,
              catsFeedingInfo,
              catsMedicalInfo,
              catsBehaviourInfo,
            })
          ),
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

      return {
        chosenDaysData: combinedData,
        dateForShownData: date,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateHasCheckedInOrOutInDbAsync = createAsyncThunk(
  "updateHasCheckedInOrOutInDb",
  async ({ documentId, attributeToUpdate }, thunkAPI) => {
    try {
      const booking = await manageDatabaseDocument(
        "get",
        databaseId,
        bookingsCollectionId,
        documentId
      );

      const { checkedInStatus, checkedOutStatus } = booking;

      const newCheckedInValue =
        attributeToUpdate === "checkedInStatus" && !checkedInStatus
          ? "checked in!"
          : attributeToUpdate === "checkedInStatus" &&
            checkedInStatus === "checked in!" &&
            null;

      const newCheckedOutValue =
        attributeToUpdate === "checkedOutStatus" && !checkedOutStatus
          ? "checked out!"
          : attributeToUpdate === "checkedOutStatus" &&
            checkedOutStatus === "checked out!" &&
            null;

      const newValue =
        attributeToUpdate === "checkedInStatus"
          ? newCheckedInValue
          : newCheckedOutValue;

      const dataToUpdate = {
        [attributeToUpdate]: newValue,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        bookingsCollectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
