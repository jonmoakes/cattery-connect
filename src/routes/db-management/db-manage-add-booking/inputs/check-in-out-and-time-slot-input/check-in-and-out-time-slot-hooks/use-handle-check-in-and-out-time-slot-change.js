import { useDispatch } from "react-redux";
import useGetDbManageAddBookingSelectors from "../../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setAddBookingData } from "../../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleCheckInAndOutTimeSlotChange = () => {
  const { addBookingData, checkInSlot, checkOutSlot } =
    useGetDbManageAddBookingSelectors();
  const dispatch = useDispatch();

  const handleChooseCheckInAndOutTimeSlotChange = (event, slotType) => {
    const { value } = event.target;

    dispatch(
      setAddBookingData({
        ...addBookingData,
        [slotType]: value,
      })
    );
  };

  return { handleChooseCheckInAndOutTimeSlotChange, checkInSlot, checkOutSlot };
};

export default useHandleCheckInAndOutTimeSlotChange;
