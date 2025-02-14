import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  resetUpdatePensDataError,
  resetUpdatePensDataResult,
} from "../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../../strings/errors";

const useUpdatePensErrorSwal = () => {
  const { updatePensDataError } = useGetDbManageAddBookingSelectors();
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
