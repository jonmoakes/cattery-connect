import { useEffect } from "react";
import { isBefore, parseISO } from "date-fns";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import useCheckOutDateBeforeCheckInDateSwal from "../swals/use-check-out-date-before-check-in-date-swal";
import useSameDayCheckInAndOutSlotsAreTheSameSwal from "../swals/use-same-day-check-in-and-out-slots-are-the-same-swal";

const useCheckInAndOutDateValidityUseEffect = () => {
  const { checkInDate, checkOutDate, checkInSlot, checkOutSlot } =
    useGetUploadBookingDataSelectors();
  const { checkOutDateBeforeCheckInDateSwal } =
    useCheckOutDateBeforeCheckInDateSwal();
  const { sameDayCheckInAndOutSlotsAreTheSameSwal } =
    useSameDayCheckInAndOutSlotsAreTheSameSwal();

  useEffect(() => {
    if (!checkInDate && !checkOutDate) return;

    const parsedCheckInDate = checkInDate ? parseISO(checkInDate) : checkInDate;
    const parsedCheckOutDate = checkOutDate
      ? parseISO(checkOutDate)
      : checkOutDate;

    if (isBefore(parsedCheckOutDate, parsedCheckInDate)) {
      checkOutDateBeforeCheckInDateSwal();
    } else if (checkInDate === checkOutDate && checkInSlot === checkOutSlot) {
      sameDayCheckInAndOutSlotsAreTheSameSwal();
    }
  }, [
    checkInDate,
    checkOutDate,
    checkInSlot,
    checkOutSlot,
    checkOutDateBeforeCheckInDateSwal,
    sameDayCheckInAndOutSlotsAreTheSameSwal,
  ]);
};

export default useCheckInAndOutDateValidityUseEffect;
