import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCatDetailsManagementSelectors from "./selectors/use-get-cat-details-management-selectors";
import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";
import {
  resetDeleteCatError,
  resetDeleteCatResult,
} from "../store/cat-details-management/cat-details-management.slice";

import useFireSwal from "./use-fire-swal";

import { errorReceivedMessage } from "../strings/errors";

const useDeleteCatResultSwalUseEffect = () => {
  const { deleteCatResult, deleteCatError } =
    useGetCatDetailsManagementSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (!deleteCatResult && !deleteCatError) return;

    if (deleteCatResult === "fulfilled") {
      fireSwal(
        "success",
        "the cat was deleted!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteCatResult());
        }
      });
    } else {
      const error = deleteCatError;
      fireSwal(
        "error",
        errorReceivedMessage("error deleting cat..", error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteCatResult());
          dispatch(resetDeleteCatError());
        }
      });
    }
  }, [
    fireSwal,
    deleteCatResult,
    deleteCatError,
    dispatch,
    hamburgerHandlerNavigate,
    path,
    catteryId,
  ]);
};

export default useDeleteCatResultSwalUseEffect;
