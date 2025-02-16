import { useDispatch } from "react-redux";

import useGetUpdatePensDataSelectors from "../../../../../hooks/selectors/use-get-update-pens-data-selectors";
import {
  resetUpdatePensDataError,
  resetUpdatePensDataResult,
} from "../../../../../store/update-pens-data/update-pens-data.slice";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../../strings/errors";

const useUpdatePensErrorSwal = () => {
  const { updatePensDataError } = useGetUpdatePensDataSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updatePensErrorSwal = () => {
    fireSwal(
      "error",
      errorReceivedMessage(
        "there was an error making the booking.",
        updatePensDataError
      ),
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetUpdatePensDataResult());
        dispatch(resetUpdatePensDataError());
      }
    });
  };

  return { updatePensErrorSwal };
};

export default useUpdatePensErrorSwal;
