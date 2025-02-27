import { useCallback } from "react";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";

import useBookingSuccessNoEmailSwal from "./use-booking-success-no-email-swal";
import useBookingSuccessHasEmailSwal from "./use-booking-success-has-email-swal";

const useBookingCompleteSwal = () => {
  const { uploadBookingData, customerEmail } =
    useGetUploadBookingDataSelectors();
  const { name, phone, catteryEmail, pricePerNight } =
    useGetRequiredCatteryDataForBookingSelectors();

  const { bookingSuccessNoEmailSwal } = useBookingSuccessNoEmailSwal();
  const { bookingSuccessHasEmailSwal } = useBookingSuccessHasEmailSwal();

  const bookingCompleteSwal = useCallback(
    (setSwalConfirmed) => {
      if (!customerEmail) {
        setSwalConfirmed(true);
        bookingSuccessNoEmailSwal();
      } else if (customerEmail) {
        setSwalConfirmed(true);
        bookingSuccessHasEmailSwal(
          uploadBookingData,
          pricePerNight,
          name,
          phone,
          catteryEmail
        );
      }
    },
    [
      bookingSuccessNoEmailSwal,
      bookingSuccessHasEmailSwal,
      uploadBookingData,
      pricePerNight,
      name,
      phone,
      catteryEmail,
      customerEmail,
    ]
  );

  return { bookingCompleteSwal };
};

export default useBookingCompleteSwal;
