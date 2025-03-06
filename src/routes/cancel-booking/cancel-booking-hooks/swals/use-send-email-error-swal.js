import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { contactRoute } from "../../../../strings/routes";
import { useDispatch } from "react-redux";
import { resetCancelBookingState } from "../../../../store/cancel-booking/cancel-booking.slice";
import { resetRequiredCatteryDataForBookingState } from "../../../../store/required-cattery-data/required-cattery-data-for-booking.slice";
import { resetSendEmailState } from "../../../../store/send-email/send-email.slice";
import { resetUpdatePensDataState } from "../../../../store/update-pens-data/update-pens-data.slice";

const useSendEmailErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const sendEmailErrorSwal = useCallback(
    (sendEmailError) => {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please contact jonathan. The error received was: 

'${sendEmailError}'`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCancelBookingState());
          dispatch(resetRequiredCatteryDataForBookingState());
          dispatch(resetSendEmailState());
          dispatch(resetUpdatePensDataState());
          setTimeout(() => {
            hamburgerHandlerNavigate(contactRoute);
          }, 200);
        }
      });
    },
    [fireSwal, hamburgerHandlerNavigate, dispatch]
  );

  return { sendEmailErrorSwal };
};

export default useSendEmailErrorSwal;
