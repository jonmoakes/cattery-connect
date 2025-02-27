import { useDispatch } from "react-redux";
import { resetIsBookingAvailableResult } from "../../../store/is-booking-available/is-booking-available.slice";

const useHandleChangeDetailsRequest = () => {
  const dispatch = useDispatch();

  const handleChangeDetailsRequest = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(resetIsBookingAvailableResult());
  };

  return { handleChangeDetailsRequest };
};

export default useHandleChangeDetailsRequest;
