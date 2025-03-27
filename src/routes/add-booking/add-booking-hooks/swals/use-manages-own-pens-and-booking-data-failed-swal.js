import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";
import {
  resetUploadBookingDataError,
  resetUploadBookingDataResult,
} from "../../../../store/upload-booking-data/upload-booking-data.slice";

const useManagesOwnPensAndBookingDataFailedSwal = () => {
  const { uploadBookingDataError } = useGetUploadBookingDataSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const managesOwnPensAndBookingDataFailedSwal = useCallback(() => {
    fireSwal(
      "error",
      errorReceivedMessage(
        `there was an error making the booking 
( addBookingToDBThunk )`,
        uploadBookingDataError
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetUploadBookingDataResult());
        dispatch(resetUploadBookingDataError());
      }
    });
  }, [dispatch, fireSwal, uploadBookingDataError]);

  return { managesOwnPensAndBookingDataFailedSwal };
};
export default useManagesOwnPensAndBookingDataFailedSwal;
