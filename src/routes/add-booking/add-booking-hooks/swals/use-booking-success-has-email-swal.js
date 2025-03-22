import { useCallback } from "react";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import { bookingCompletedSendEmailQuestionMessage } from "../../../../strings/confirms";
import { useDispatch } from "react-redux";
import { sendEmailSendCustomerEmailReceiptAsync } from "../../../../store/send-email/send-email.thunks";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { accountRoute } from "../../../../strings/routes";

const useBookingSuccessHasEmailSwal = () => {
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const bookingSuccessHasEmailSwal = useCallback(
    (uploadBookingData, pricePerNight, name, phone, catteryEmail) => {
      const confirmResult = () => {
        dispatch(
          sendEmailSendCustomerEmailReceiptAsync({
            uploadBookingData,
            pricePerNight,
            name,
            phone,
            catteryEmail,
          })
        );
      };

      const cancelResult = () => {
        confirmSwal(
          "would you like to make another booking?",
          "",
          `yes`,
          "no",
          () => window.location.reload(),
          () => hamburgerHandlerNavigate(accountRoute)
        );
      };

      confirmSwal(
        bookingCompletedSendEmailQuestionMessage,
        "",
        `yes`,
        "no",
        confirmResult,
        cancelResult
      );
    },
    [confirmSwal, dispatch, hamburgerHandlerNavigate]
  );

  return { bookingSuccessHasEmailSwal };
};

export default useBookingSuccessHasEmailSwal;
