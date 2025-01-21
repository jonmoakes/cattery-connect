import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCustomerToEditDetails } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

const useSetCustomerDataToBePassedForEditingUseEffect = (chosenEntry) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenEntry) return;
    dispatch(setCustomerToEditDetails(chosenEntry));
  }, [chosenEntry, dispatch]);
};

export default useSetCustomerDataToBePassedForEditingUseEffect;
