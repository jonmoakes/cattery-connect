import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setAddBookingData } from "../../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleChooseCatsChange = () => {
  const { addBookingData } = useGetDbManageAddBookingSelectors();

  const dispatch = useDispatch();

  const handleChooseCatsChange = (event) => {
    const { name, checked } = event.target;

    const existingCats = addBookingData.catsInBooking || [];

    const updatedCats = checked
      ? [...existingCats, name]
      : existingCats.filter((catName) => catName !== name);

    dispatch(
      setAddBookingData({
        ...addBookingData,
        catsInBooking: updatedCats,
      })
    );
  };

  return { handleChooseCatsChange };
};

export default useHandleChooseCatsChange;
