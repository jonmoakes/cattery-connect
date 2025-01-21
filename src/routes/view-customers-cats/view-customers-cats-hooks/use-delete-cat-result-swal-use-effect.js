import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors";
import { allCustomersRoute } from "../../../strings/routes";

const useDeleteCatResultSwalUseEffect = () => {
  const { catDetailsManagementResult, catDetailsManagementError } =
    useGetCatDetailsManagementSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!catDetailsManagementResult && !catDetailsManagementError) return;

    if (catDetailsManagementResult === "fulfilled") {
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
          hamburgerHandlerNavigate(allCustomersRoute);
        }
      });
    } else {
      const error = catDetailsManagementError;
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
    catDetailsManagementResult,
    catDetailsManagementError,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useDeleteCatResultSwalUseEffect;
