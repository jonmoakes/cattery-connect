import { useDispatch } from "react-redux";

import { setDataFromBooking } from "../../../store/cancel-booking/cancel-booking.slice";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { cancelBookingRoute } from "../../../strings/routes";

const useBookingsFunctions = () => {
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const passDataAndNavigateToCancelBookingRoute = (chosenEntry) => {
    const {
      $id,
      catsInBooking,
      catteryId,
      checkInDate,
      checkInSlot,
      checkOutDate,
      checkOutSlot,
      customerName,
      customerEmail,
      bookingId,
    } = chosenEntry;

    const dataToPass = {
      $id,
      catsInBooking,
      catteryId,
      checkInDate,
      checkInSlot,
      checkOutDate,
      checkOutSlot,
      customerName,
      customerEmail,
      bookingId,
    };

    dispatch(setDataFromBooking(dataToPass));
    hamburgerHandlerNavigate(cancelBookingRoute);
  };

  return { passDataAndNavigateToCancelBookingRoute };
};

export default useBookingsFunctions;
