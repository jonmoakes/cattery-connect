import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetBookingsSelectors from "../../../hooks/selectors/use-get-bookings-selectors";
import { setOwnerBookings } from "../../../store/bookings/bookings.slice";

import {
  databaseId,
  bookingsCollectionId,
} from "../../../constants/appwrite-constants";

const useBookingsListener = () => {
  const { ownerBookings } = useGetBookingsSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${bookingsCollectionId}.documents`,

      (response) => {
        const documentChanged = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = documentChanged.$id;

          const updatedEntries = ownerBookings.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setOwnerBookings(updatedEntries));
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = ownerBookings.findIndex(
            (session) => session.$id === documentChanged.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = ownerBookings.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...documentChanged }
                : session
            );

            dispatch(setOwnerBookings(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...ownerBookings, documentChanged];
            dispatch(setOwnerBookings(updatedEntries));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, ownerBookings, dispatch]);
};

export default useBookingsListener;
