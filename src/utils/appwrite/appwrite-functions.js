import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

export const listDocumentsByQueryOrSearch = async (
  databaseId,
  collectionId,
  indexOrQueryArray,
  value = null,
  isSearch = false,
  limit = null
) => {
  let query = [];

  // If indexOrQueryArray is an array, treat it as a custom query array
  if (Array.isArray(indexOrQueryArray)) {
    query = [...indexOrQueryArray];
  } else {
    // Otherwise, fall back to your simple search/equality logic
    query = isSearch
      ? [Query.search(indexOrQueryArray, value)]
      : [Query.equal(indexOrQueryArray, value)];
  }

  if (limit) {
    query.push(Query.limit(limit));
  }

  return await databases.listDocuments(databaseId, collectionId, query);
};

export const listDocumentsInACollection = async (
  databaseId,
  collectionId,
  limit
) => {
  return await databases.listDocuments(databaseId, collectionId, [
    Query.limit(limit),
  ]);
};

export const manageDatabaseDocument = async (
  type,
  databaseId,
  collectionId,
  documentId,
  data
) => {
  switch (type) {
    case "create":
      return await databases.createDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    case "update":
      return await databases.updateDocument(
        databaseId,
        collectionId,
        documentId,
        data
      );
    case "delete":
      return await databases.deleteDocument(
        databaseId,
        collectionId,
        documentId
      );
    case "get":
      return await databases.getDocument(databaseId, collectionId, documentId);
    default:
      throw new Error(`Unsupported operation: ${type}`);
  }
};
