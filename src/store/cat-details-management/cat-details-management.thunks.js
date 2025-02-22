import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { databaseId, catsCollectionId } from "../../constants/constants";
import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateShortId } from "../../functions/generate-short-id";
import { ID } from "appwrite";

export const addCatAsync = createAsyncThunk(
  "addCat",
  async ({ catObject, customerId, customerName, catteryId }, thunkAPI) => {
    try {
      const lowercasedCat = lowercaseObjectValues(catObject);

      const data = {
        customerId,
        ownersName: customerName,
        catsId: generateShortId(catObject.catsName),
        catteryId,
        ...lowercasedCat,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        catsCollectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCatAsync = createAsyncThunk(
  "editCat",
  async ({ catObject }, thunkAPI) => {
    try {
      const { $id, ...rest } = catObject;

      const {
        catsId,
        catsName,
        catsBreed,
        catsAge,
        catsGender,
        catsMedicalInfo,
        vaccinationStatus,
        catsFeedingInfo,
        catsBehaviourInfo,
        customerId,
      } = rest;

      const data = lowercaseObjectValues({
        catsId,
        catsName,
        catsBreed,
        catsAge,
        catsGender,
        catsMedicalInfo,
        vaccinationStatus,
        catsFeedingInfo,
        catsBehaviourInfo,
        customerId,
      });

      await manageDatabaseDocument(
        "update",
        databaseId,
        catsCollectionId,
        $id,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCatAsync = createAsyncThunk(
  " deleteCat",
  async ({ catsDocumentId }, thunkAPI) => {
    try {
      await manageDatabaseDocument(
        "delete",
        databaseId,
        catsCollectionId,
        catsDocumentId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
