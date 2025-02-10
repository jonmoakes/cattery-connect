import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isBefore, parseISO } from "date-fns";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { setAddBookingData } from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useCheckInAndOutDateValidityUseEffect = () => {
  const {
    checkInDate,
    checkOutDate,
    checkInSlot,
    checkOutSlot,
    addBookingData,
  } = useGetDbManageAddBookingSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!checkInDate && !checkOutDate) return;

    const parsedCheckInDate = parseISO(checkInDate);
    const parsedCheckOutDate = parseISO(checkOutDate);

    if (isBefore(parsedCheckOutDate, parsedCheckInDate)) {
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
            setAddBookingData({
              ...addBookingData,
              checkOutDate: "",
              checkOutSlot: "",
            })
          );
        }
      });
    } else if (checkInDate === checkOutDate && checkInSlot === checkOutSlot) {
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
            setAddBookingData({
              ...addBookingData,
              checkOutSlot: "",
            })
          );
        }
      });
    }
  }, [
    checkInDate,
    checkOutDate,
    checkInSlot,
    checkOutSlot,
    dispatch,
    addBookingData,
    fireSwal,
  ]);
};

export default useCheckInAndOutDateValidityUseEffect;
