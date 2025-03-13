import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetAllCustomersSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import { setAllCustomers } from "../../../store/get-all-customers/get-all-customers.slice";

import { databaseId, usersCollectionId } from "../../../constants/constants";

const useAllCustomersListener = () => {
  const { allCustomers } = useGetAllCustomersSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${usersCollectionId}.documents`,

      (response) => {
        const documentChanged = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = documentChanged.$id;

          const updatedEntries = allCustomers.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setAllCustomers(updatedEntries));
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = allCustomers.findIndex(
            (session) => session.$id === documentChanged.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = allCustomers.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...documentChanged }
                : session
            );

            dispatch(setAllCustomers(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...allCustomers, documentChanged];
            dispatch(setAllCustomers(updatedEntries));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, allCustomers, dispatch]);
};

export default useAllCustomersListener;
