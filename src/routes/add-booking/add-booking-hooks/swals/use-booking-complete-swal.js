import { useCallback } from "react";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";

import useBookingSuccessNoEmailSwal from "./use-booking-success-no-email-swal";
import useBookingSuccessHasEmailSwal from "./use-booking-success-has-email-swal";

const useBookingCompleteSwal = () => {
  const { uploadBookingData, customerEmail } =
    useGetUploadBookingDataSelectors();
  const { name, phone, catteryEmail, pricePerNight } =
    useGetCatteryDetailsSelectors();

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
