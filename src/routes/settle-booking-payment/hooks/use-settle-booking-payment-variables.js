import { differenceInDays, format } from "date-fns";

import useGetSignedInCustomersBookingsSelectors from "../../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";

const useSettleBookingPaymentVariables = () => {
  const { checkInDate, checkOutDate } =
    useGetSignedInCustomersBookingsSelectors();

  const lengthOfStay = differenceInDays(checkOutDate, checkInDate);
  const formattedDate = (date) => {
    return date ? format(date, "EEEE dd MMMM yyyy") : date;
  };

  return { lengthOfStay, formattedDate };
};

export default useSettleBookingPaymentVariables;
