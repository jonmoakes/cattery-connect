import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";

import { setCatDetails } from "../../../store/cat-details-management/cat-details-management.slice";
import { editCatRoute } from "../../../strings/routes";
import { useLocation } from "react-router-dom";

const useSetEditCatDetailsFormValuesUseEffect = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();
  const { catToEdit } = dataToBePassed ?? {};

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path !== editCatRoute || !catToEdit) return;
    dispatch(setCatDetails(catToEdit));
  }, [dataToBePassed, dispatch, path, catToEdit]);
};

export default useSetEditCatDetailsFormValuesUseEffect;
