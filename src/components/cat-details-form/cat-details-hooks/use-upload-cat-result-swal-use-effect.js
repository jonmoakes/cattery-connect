import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import {
  resetCatDetailsManagementError,
  resetCatDetailsManagementResult,
} from "../../../store/cat-details-management/cat-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { addCatRoute, allCustomersRoute } from "../../../strings/routes";

const useUploadCatResultSwalUseEffect = () => {
  const { catDetailsManagementResult, catDetailsManagementError, catsName } =
    useGetCatDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (!catDetailsManagementResult && !catDetailsManagementError) return;

    if (catDetailsManagementResult === "fulfilled") {
      const action = path === addCatRoute ? "added" : "updated";
      fireSwal(
        "success",
        `${catsName} ${action}!`,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(allCustomersRoute);
        }
      });
    } else {
      const action = path === addCatRoute ? "adding" : "updating";
      const error = catDetailsManagementError;
      fireSwal(
        "error",
        errorReceivedMessage(`error ${action} cat..`, error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCatDetailsManagementResult());
          dispatch(resetCatDetailsManagementError());
        }
      });
    }
  }, [
    fireSwal,
    catDetailsManagementResult,
    catDetailsManagementError,
    path,
    dispatch,
    hamburgerHandlerNavigate,
    catsName,
  ]);
};

export default useUploadCatResultSwalUseEffect;
