import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { isBefore, parseISO } from "date-fns";
import { setDbManageAddBookingData } from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";

const useCheckInAndOutDateValidityUseEffect = () => {
  const { checkInDate, checkOutDate, dbManageAddBookingData } =
    useGetDbManageAddBookingSelectors();

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
            setDbManageAddBookingData({
              ...dbManageAddBookingData,
              checkOutDate: "",
              checkOutSlot: "",
            })
          );
        }
      });
    }
  }, [checkInDate, checkOutDate, dispatch, dbManageAddBookingData, fireSwal]);
};

export default useCheckInAndOutDateValidityUseEffect;
