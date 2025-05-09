import { account } from "../../utils/appwrite/appwrite-config";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";
import {
  databaseId,
  usersCollectionId,
} from "../../constants/appwrite-constants";

export const getRetrievedUserFromDocument = async () => {
  const user = await account.get();

  const queryIndex = "$id";
  const id = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    usersCollectionId,
    queryIndex,
    id,
    false,
    null
  );

  // number of documents found in database and the document.
  //Should only be 1 as only 1 should match the user.$id
  const { total, documents } = userDocument;

  if (total === 0) {
    await account.deleteSession("current");
    throw new Error(`no customer found.
      
the users document may have been deleted.`);
  }

  const { name, email, role, catteryId, customerId } = documents[0];

  return {
    id,
    name,
    email,
    role,
    catteryId,
    customerId,
  };
};
