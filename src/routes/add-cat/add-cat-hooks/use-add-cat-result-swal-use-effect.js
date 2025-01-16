import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";
import {
  resetAddCatResult,
  resetAddCatError,
} from "../../../store/add-cat/add-cat.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { allCustomersRoute } from "../../../strings/routes";

const useAddCatResultSwalUseEffect = () => {
  const { addCatResult, addCatError } = useGetAddCatDetailsSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!addCatResult && !addCatError) return;

    if (addCatResult === "fulfilled") {
      fireSwal("success", "cat added!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(allCustomersRoute);
          }
        }
      );
    } else {
      const error = addCatError;
      fireSwal(
        "error",
        errorReceivedMessage("error adding cat..", error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetAddCatResult());
          dispatch(resetAddCatError());
        }
      });
    }
  }, [fireSwal, addCatError, addCatResult, dispatch, hamburgerHandlerNavigate]);
};

export default useAddCatResultSwalUseEffect;
