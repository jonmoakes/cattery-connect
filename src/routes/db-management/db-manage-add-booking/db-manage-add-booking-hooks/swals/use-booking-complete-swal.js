import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { sendEmailCatteryConnectSendCustomerEmailReceiptAsync } from "../../../../../store/send-email/send-email.thunks";

import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../../strings/routes";
import { bookingCompletedSendEmailQuestionMessage } from "../../../../../strings/confirms";

const useBookingCompleteSwal = () => {
  const {
    addBookingData,
    customerEmail,
    pricePerNight,
    name,
    phone,
    catteryEmail,
  } = useGetDbManageAddBookingSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const bookingCompleteSwal = (setSwalConfirmed) => {
    if (!customerEmail) {
      fireSwal(
        "success",
        "booking completed!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          confirmSwal(
            "would you like to make another booking?",
            "",
            `yes`,
            "no",
            () => window.location.reload(),
            () => hamburgerHandlerNavigate(accountRoute)
          );
        }
      });
    } else if (customerEmail) {
      setSwalConfirmed(true);
      confirmSwal(
        bookingCompletedSendEmailQuestionMessage,
        "",
        `yes`,
        "no",
        () =>
          dispatch(
            sendEmailCatteryConnectSendCustomerEmailReceiptAsync({
              addBookingData,
              pricePerNight,
              name,
              phone,
              catteryEmail,
            })
          ),
        () =>
          confirmSwal(
            "would you like to make another booking?",
            "",
            `yes`,
            "no",
            () => window.location.reload(),
            () => hamburgerHandlerNavigate(accountRoute)
          )
      );
    }
  };

  return { bookingCompleteSwal };
};

export default useBookingCompleteSwal;
