import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { setAddBookingData } from "../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../../hooks/use-fire-swal";

const useCheckOutDateBeforeCheckInDateSwal = () => {
  const { addBookingData } = useGetDbManageAddBookingSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const checkOutDateBeforeCheckInDateSwal = () => {
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
  };

  return { checkOutDateBeforeCheckInDateSwal };
};

export default useCheckOutDateBeforeCheckInDateSwal;
