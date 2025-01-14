import { account } from "../../utils/appwrite/appwrite-config";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions/";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_USERS_COLLECTION_ID;

export const getRetrievedUserFromDocument = async () => {
  const user = await account.get();

  const queryIndex = "$id";
  const id = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    collectionId,
    queryIndex,
    id,
    false,
    null
  );

  // number of documents found in database and the document.
  //Should only be 1 as only 1 should match the user.$id
  const { total, documents } = userDocument;

  if (total && documents.length) {
    const { name, email, role, catteryId } = documents[0];

    return {
      id,
      name,
      email,
      role,
      catteryId,
    };
  } else {
    return;
  }
};
