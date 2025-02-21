import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../../store/upload-booking-data/upload-booking-data.slice";

const useHandleChooseCatsChange = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();

  const dispatch = useDispatch();

  const handleChooseCatsChange = (event) => {
    const { name, checked } = event.target;

    const existingCats = uploadBookingData.catsInBooking || [];

    const updatedCats = checked
      ? [...existingCats, name]
      : existingCats.filter((catName) => catName !== name);

    dispatch(
      setUploadBookingData({
        ...uploadBookingData,
        catsInBooking: updatedCats,
      })
    );
  };

  return { handleChooseCatsChange };
};

export default useHandleChooseCatsChange;
