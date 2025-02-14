import { useEffect } from "react";
import { isBefore, parseISO } from "date-fns";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useCheckOutDateBeforeCheckInDateSwal from "../swals/use-check-out-date-before-check-in-date-swal";
import useSameDayCheckInAndOutSlotsAreTheSameSwal from "../swals/use-same-day-check-in-and-out-slots-are-the-same-swal";

const useCheckInAndOutDateValidityUseEffect = () => {
  const { checkInDate, checkOutDate, checkInSlot, checkOutSlot } =
    useGetDbManageAddBookingSelectors();
  const { checkOutDateBeforeCheckInDateSwal } =
    useCheckOutDateBeforeCheckInDateSwal();
  const { sameDayCheckInAndOutSlotsAreTheSameSwal } =
    useSameDayCheckInAndOutSlotsAreTheSameSwal();

  useEffect(() => {
    if (!checkInDate && !checkOutDate) return;

    const parsedCheckInDate = parseISO(checkInDate);
    const parsedCheckOutDate = parseISO(checkOutDate);

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
