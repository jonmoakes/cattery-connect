import { useCallback } from "react";

import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";

import useNoEmailSuccessSwal from "./use-no-email-success-swal";
import useHasEmailSuccessSwal from "./use-has-email-success-swal";

const useBookingCancelledSuccessSwal = () => {
  const { customerEmail } = useGetCancelBookingSelectors();
  const { noEmailSuccessSwal } = useNoEmailSuccessSwal();
  const { hasEmailSuccessSwal } = useHasEmailSuccessSwal();

  const bookingCancelledSuccessSwal = useCallback(
    (setSwalConfirmed) => {
      if (!customerEmail) {
        noEmailSuccessSwal();
      } else if (customerEmail) {
        setSwalConfirmed(true);
        hasEmailSuccessSwal();
      }
    },
    [customerEmail, hasEmailSuccessSwal, noEmailSuccessSwal]
  );

  return { bookingCancelledSuccessSwal };
};

export default useBookingCancelledSuccessSwal;
