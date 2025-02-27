import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../store/upload-booking-data/upload-booking-data.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useCheckOutDateBeforeCheckInDateSwal = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const checkOutDateBeforeCheckInDateSwal = useCallback(() => {
    fireSwal(
      "error",
      "the check out date cannot be before the check in date..",
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
            checkOutDate: "",
            checkOutSlot: "",
          })
        );
      }
    });
  }, [dispatch, fireSwal, uploadBookingData]);

  return { checkOutDateBeforeCheckInDateSwal };
};

export default useCheckOutDateBeforeCheckInDateSwal;
