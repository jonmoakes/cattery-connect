import { useEffect, useRef } from "react";
import useGetIsBookingAvailableSelectors from "../../../../hooks/selectors/use-get-is-booking-available-selectors";
import useCatteryNotAvailableOnChosenDatesSwal from "../swals/use-cattery-not-available-on-chosen-dates-swal";

const SCROLL_OFFSET = 0.25; // 25% from the top of the viewport

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const {
    isBookingAvailableResult,
    isBookingAvailableError,
    availabilityStatus,
  } = useGetIsBookingAvailableSelectors();
  const { catteryNotAvailableOnChosenDatesSwal } =
    useCatteryNotAvailableOnChosenDatesSwal();

  let noAvailabilityRef = useRef(null);
  let bookingIsAvailableRef = useRef(null);

  const scrollToElement = (element) => {
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementTop - window.innerHeight * SCROLL_OFFSET;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isBookingAvailableResult && !isBookingAvailableError) return;

    if (availabilityStatus === "bookingAvailable") {
      scrollToElement(bookingIsAvailableRef.current);
      bookingIsAvailableRef.current = null;
    } else if (availabilityStatus === "bookingNotAvailable") {
      scrollToElement(noAvailabilityRef.current);
      noAvailabilityRef.current = null;
    }

    if (isBookingAvailableResult === "rejected") {
      catteryNotAvailableOnChosenDatesSwal(isBookingAvailableError);
    }
  }, [
    isBookingAvailableResult,
    isBookingAvailableError,
    catteryNotAvailableOnChosenDatesSwal,
    availabilityStatus,
  ]);

  return { noAvailabilityRef, bookingIsAvailableRef };
};

export default useCheckBookingAvailableResultSwalUseEffect;
