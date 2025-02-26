import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetCatDetailsManagementState } from "../../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  addCatChooseOwnerRoute,
  allCatsRoute,
  allCustomersRoute,
  viewCustomersCatsRoute,
} from "../../../../strings/routes";

const useCatUploadedSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const catUploadedSuccessSwal = useCallback(
    (catsName, action, fromRoute) => {
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
          dispatch(resetCatDetailsManagementState());
          if ([viewCustomersCatsRoute, allCustomersRoute].includes(fromRoute)) {
            hamburgerHandlerNavigate(allCustomersRoute);
          } else if (
            [addCatChooseOwnerRoute, allCatsRoute].includes(fromRoute)
          ) {
            hamburgerHandlerNavigate(allCatsRoute);
          }
        }
      });
    },
    [fireSwal, dispatch, hamburgerHandlerNavigate]
  );

  return { catUploadedSuccessSwal };
};

export default useCatUploadedSuccessSwal;
