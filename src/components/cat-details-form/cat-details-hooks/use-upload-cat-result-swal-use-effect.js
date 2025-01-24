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
import {
  addCatChooseOwnerRoute,
  addCatRoute,
  allCatsRoute,
  allCustomersRoute,
  viewCustomersCatsRoute,
} from "../../../strings/routes";

const useUploadCatResultSwalUseEffect = (fromRoute) => {
  const { catDetailsManagementResult, catDetailsManagementError, catsName } =
    useGetCatDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (!catDetailsManagementResult && !catDetailsManagementError) return;

    const action =
      path === addCatRoute
        ? catDetailsManagementResult === "fulfilled"
          ? "added"
          : "adding"
        : catDetailsManagementResult === "fulfilled"
        ? "updated"
        : "updating";
    const isSuccess = catDetailsManagementResult === "fulfilled";

    if (isSuccess) {
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
          if (fromRoute === viewCustomersCatsRoute) {
            hamburgerHandlerNavigate(allCustomersRoute);
          } else if (
            fromRoute === allCatsRoute ||
            fromRoute === addCatChooseOwnerRoute
          ) {
            hamburgerHandlerNavigate(allCatsRoute);
          } else {
            hamburgerHandlerNavigate(allCatsRoute);
          }
        }
      });
    } else {
      fireSwal(
        "error",
        errorReceivedMessage(
          `error ${action} cat..`,
          catDetailsManagementError
        ),
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
    fromRoute,
  ]);
};

export default useUploadCatResultSwalUseEffect;
