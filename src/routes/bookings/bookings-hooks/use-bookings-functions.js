import { useDispatch } from "react-redux";

import { setDataForAvailabilityDocsRequest } from "../../../store/cancel-booking/cancel-booking.slice";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { cancelBookingRoute } from "../../../strings/routes";

const useBookingsFunctions = () => {
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const passDataAndNavigateToCancelBookingRoute = (chosenEntry) => {
    const {
      catsInBooking,
      catteryId,
      checkInDate,
      checkInSlot,
      checkOutDate,
      checkOutSlot,
      customerName,
    } = chosenEntry;

    const dataToPass = {
      catsInBooking,
      catteryId,
      checkInDate,
      checkInSlot,
      checkOutDate,
      checkOutSlot,
      customerName,
    };

    dispatch(setDataForAvailabilityDocsRequest(dataToPass));
    hamburgerHandlerNavigate(cancelBookingRoute);
  };

  return { passDataAndNavigateToCancelBookingRoute };
};

export default useBookingsFunctions;
