import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../../store/upload-booking-data/upload-booking-data.slice";

const useHandleCheckInAndOutTimeSlotChange = () => {
  const { uploadBookingData, checkInSlot, checkOutSlot } =
    useGetUploadBookingDataSelectors();
  const dispatch = useDispatch();

  const handleChooseCheckInAndOutTimeSlotChange = (event, slotType) => {
    const { value } = event.target;

    dispatch(
      setUploadBookingData({
        ...uploadBookingData,
        [slotType]: value,
      })
    );
  };

  return { handleChooseCheckInAndOutTimeSlotChange, checkInSlot, checkOutSlot };
};

export default useHandleCheckInAndOutTimeSlotChange;
