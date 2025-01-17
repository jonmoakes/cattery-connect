import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDeleteCatSelectors from "../../../hooks/selectors/use-get-delete-cat-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetDeleteCatState } from "../../../store/delete-cat/delete-cat.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors";
import { allCustomersRoute } from "../../../strings/routes";

const useDeleteCatResultSwalUseEffect = () => {
  const { deleteCatResult, deleteCatError } = useGetDeleteCatSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

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
          hamburgerHandlerNavigate(allCustomersRoute);
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
          dispatch(resetDeleteCatState());
        }
      });
    }
  }, [
    fireSwal,
    deleteCatError,
    deleteCatResult,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useDeleteCatResultSwalUseEffect;
