import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";
import { setAllCats } from "../../../store/get-all-cats/get-all-cats.slice";

import {
  databaseId,
  catsCollectionId,
} from "../../../constants/appwrite-constants";

const useAllCatsDeleteListener = () => {
  const { allCats } = useGetAllCatsSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${catsCollectionId}.documents`,
      (response) => {
        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = response.payload.$id;

          // Filter out the deleted entry from the state
          const updatedEntries = allCats.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setAllCats(updatedEntries));
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, allCats, dispatch]);
};

export default useAllCatsDeleteListener;
