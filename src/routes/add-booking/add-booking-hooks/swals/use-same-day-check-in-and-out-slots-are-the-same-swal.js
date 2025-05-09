import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../store/upload-booking-data/upload-booking-data.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useSameDayCheckInAndOutSlotsAreTheSameSwal = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const sameDayCheckInAndOutSlotsAreTheSameSwal = useCallback(() => {
    fireSwal(
      "error",
      "the check in and check out slots cannot be the same..",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(
          setUploadBookingData({
            ...uploadBookingData,
            checkOutSlot: "",
          })
        );
      }
    });
  }, [dispatch, fireSwal, uploadBookingData]);

  return { sameDayCheckInAndOutSlotsAreTheSameSwal };
};
export default useSameDayCheckInAndOutSlotsAreTheSameSwal;
