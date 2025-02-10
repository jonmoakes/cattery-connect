import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetDbManageAddBookingSelectors from "../../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setAddBookingData } from "../../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleCheckInAndOutDatesChange = () => {
  const { addBookingData, checkInDate, checkOutDate } =
    useGetDbManageAddBookingSelectors();
  const dispatch = useDispatch();

  const handleCheckInAndOutDatesChange = (dateType, date) => {
    dispatch(
      setAddBookingData({
        ...addBookingData,
        [dateType]: format(date, "yyyy-MM-dd"),
      })
    );
  };

  return { handleCheckInAndOutDatesChange, checkInDate, checkOutDate };
};

export default useHandleCheckInAndOutDatesChange;
