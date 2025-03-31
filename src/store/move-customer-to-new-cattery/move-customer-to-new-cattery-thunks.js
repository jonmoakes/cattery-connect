import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  bookingsCollectionId,
  catsCollectionId,
  databaseId,
  smallRateLimit,
  usersCollectionId,
} from "../../constants/constants";

export const checkCustomerCanBeMovedAsync = createAsyncThunk(
  "checkCustomerCanBeMoved",
  async ({ customerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const getCustomerDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        usersCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const customerDocument = getCustomerDocument.documents;

      if (!customerDocument.length) {
        return {
          customerDocumentId: "",
          customerCanBeMoved: "customer doesn't exist",
        };
      }

      const { $id } = customerDocument[0];

      const customersBookings = await listDocumentsByQueryOrSearch(
        databaseId,
        bookingsCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = customersBookings;
      //customer has no bookings so can be moved
      if (!documents.length) {
        return {
          customerDocumentId: $id,
          customerCanBeMoved: true,
        };
      }

      const customersBookingsPaymentStatuses = documents.map(
        (doc) => doc.paymentStatus
      );

      const hasIncompletePayments = (element) => element === "incomplete";

      //at least one booking is marked as 'incomplete'
      if (customersBookingsPaymentStatuses.some(hasIncompletePayments)) {
        return "customer can't be moved";
      } else {
        //all bookings are marked as 'complete'
        return {
          customerDocumentId: $id,
          customerCanBeMoved: true,
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCustomersCatteryIdAsync = createAsyncThunk(
  "updateCustomersCatteryId",
  async ({ customerDocumentId, newCatteryId }, thunkAPI) => {
    try {
      const attributeToUpdate = "catteryId";
      const dataToUpdate = {
        [attributeToUpdate]: newCatteryId,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        usersCollectionId,
        customerDocumentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCustomersCatsCatteryIdsAsync = createAsyncThunk(
  "updateCustomersCatsCatteryIds",
  async ({ customerId, newCatteryId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const customersCats = await listDocumentsByQueryOrSearch(
        databaseId,
        catsCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = customersCats;

      if (!documents.length) {
        throw new Error("no cats found");
      }

      const updatePromises = documents.map((cat) =>
        manageDatabaseDocument(
          "update",
          databaseId,
          catsCollectionId,
          cat.$id,
          {
            catteryId: newCatteryId,
          }
        )
      );

      const results = await Promise.allSettled(updatePromises);

      const failedUpdates = results
        .map((result, index) =>
          result.status === "rejected"
            ? { catId: documents[index].$id, error: result.reason }
            : null
        )
        .filter(Boolean);

      // If any failed, reject with details
      if (failedUpdates.length) {
        console.error("Some updates failed:", failedUpdates);
        return thunkAPI.rejectWithValue(failedUpdates);
      }

      // If all succeed or no cats exist, return nothing (fulfilled)
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
