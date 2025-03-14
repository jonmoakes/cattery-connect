import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";
import useFireSwal from "../../use-fire-swal";

import {
  allCustomersRoute,
  viewCustomersCatsRoute,
} from "../../../strings/routes";

const useDeleteCatSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();
  const path = location.pathname;

  const deleteCatSuccessSwal = useCallback(() => {
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
        }
      }
    });
  }, [dispatch, fireSwal, hamburgerHandlerNavigate, path]);

  return { deleteCatSuccessSwal };
};

export default useDeleteCatSuccessSwal;
