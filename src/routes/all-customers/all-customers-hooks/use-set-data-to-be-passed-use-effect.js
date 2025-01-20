import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setDataToBePassed } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

const useSetDataToBePassedUseEffect = (chosenEntry) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!chosenEntry) return;
    dispatch(setDataToBePassed(chosenEntry));
  }, [chosenEntry, dispatch]);
};

export default useSetDataToBePassedUseEffect;
