import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCatDetailsManagementSelectors from "./selectors/use-get-cat-details-management-selectors";
import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";
import { resetCatDetailsManagementState } from "../store/cat-details-management/cat-details-management.slice";
import { resetGetAllCatsState } from "../store/get-all-cats/get-all-cats.slice";
import { fetchAllCatsAsync } from "../store/get-all-cats/get-all-cats.thunks";

import useFireSwal from "./use-fire-swal";

import { errorReceivedMessage } from "../strings/errors";
import {
  allCatsRoute,
  allCustomersRoute,
  viewCustomersCatsRoute,
} from "../strings/routes";

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
          dispatch(resetCatDetailsManagementState());
          if (path === viewCustomersCatsRoute) {
            hamburgerHandlerNavigate(allCustomersRoute);
          } else if (path === allCatsRoute) {
            dispatch(resetGetAllCatsState());
            dispatch(fetchAllCatsAsync({ catteryId }));
          }
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
          dispatch(resetCatDetailsManagementState());
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
