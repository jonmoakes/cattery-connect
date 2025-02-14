import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setAddBookingData } from "../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../../hooks/use-fire-swal";

const useSameDayCheckInAndOutSlotsAreTheSameSwal = () => {
  const { addBookingData } = useGetDbManageAddBookingSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const sameDayCheckInAndOutSlotsAreTheSameSwal = () => {
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
  };

  return { sameDayCheckInAndOutSlotsAreTheSameSwal };
};
export default useSameDayCheckInAndOutSlotsAreTheSameSwal;
