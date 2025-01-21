import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";

const useSetCustomerDataToBePassedForEditingUseEffect = (chosenEntry) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenEntry) return;
    dispatch(setCustomerDetails(chosenEntry));
  }, [chosenEntry, dispatch]);
};

export default useSetCustomerDataToBePassedForEditingUseEffect;
