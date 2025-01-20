import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";

import { setCatDetails } from "../../../store/cat-details-management/cat-details-management.slice";
import { editCatRoute } from "../../../strings/routes";
import { useLocation } from "react-router-dom";

const useSetCatDetailsFormValuesUseEffect = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path !== editCatRoute) return;

    dispatch(setCatDetails(dataToBePassed));
  }, [dataToBePassed, dispatch, path]);
};

export default useSetCatDetailsFormValuesUseEffect;
