import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";
import { setIndividualCustomersCats } from "../../../store/get-individual-customers-cats/get-individual-customers-cats.slice";

import {
  databaseId,
  catsCollectionId,
} from "../../../constants/appwrite-constants";

const useViewIndividualCustomersCatsListener = () => {
  const { individualCustomersCats } = useGetIndividualCustomersCatsSelectors();
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
          const updatedEntries = individualCustomersCats.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setIndividualCustomersCats(updatedEntries));
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, individualCustomersCats, dispatch]);
};

export default useViewIndividualCustomersCatsListener;
