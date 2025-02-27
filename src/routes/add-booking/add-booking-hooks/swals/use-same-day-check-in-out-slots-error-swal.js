import { useCallback } from "react";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { useDispatch } from "react-redux";
import { setUploadBookingData } from "../../../../store/upload-booking-data/upload-booking-data.slice";
import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

const useSameDayCheckInOutSlotsError = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const sameDayCheckInOutSlotsError = useCallback(() => {
    fireSwal(
      "error",
      "the check out slot can't be before the check in slot",
      "",
      0,
      "",
      false,
      ", false"
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
  }, [fireSwal, uploadBookingData, dispatch]);

  return { sameDayCheckInOutSlotsError };
};

export default useSameDayCheckInOutSlotsError;
