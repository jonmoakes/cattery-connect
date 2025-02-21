import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../../store/upload-booking-data/upload-booking-data.slice";

const useHandleCheckInAndOutDatesChange = () => {
  const { uploadBookingData, checkInDate, checkOutDate } =
    useGetUploadBookingDataSelectors();
  const dispatch = useDispatch();

  const handleCheckInAndOutDatesChange = (dateType, date) => {
    dispatch(
      setUploadBookingData({
        ...uploadBookingData,
        [dateType]: format(date, "yyyy-MM-dd"),
      })
    );
  };

  return { handleCheckInAndOutDatesChange, checkInDate, checkOutDate };
};

export default useHandleCheckInAndOutDatesChange;
