import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../../strings/routes";
import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { sendEmailCatteryConnectSendCustomerEmailReceiptAsync } from "../../../../../store/send-email/send-email.thunks";

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

  console.log(customerEmail);
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
        "booking completed! would you like to send the customer an email?",
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

    // fireSwal("success", "booking completed!", "", 0, "", false, "", false).then(
    //   (isConfirmed) => {
    //     if (isConfirmed) {
    //       setSwalConfirmed(true);
    //       confirmSwal(
    //         "would you like to make another booking?",
    //         "",
    //         `yes`,
    //         "no",
    //         () => window.location.reload(),
    //         () => hamburgerHandlerNavigate(accountRoute)
    //       );
    //     }
    //   }
    // );
  };

  return { bookingCompleteSwal };
};

export default useBookingCompleteSwal;
