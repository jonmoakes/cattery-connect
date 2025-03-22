import useGetBookingsSelectors from "../../hooks/selectors/use-get-bookings-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";
import useGetPaymentResultUseEffect from "./hooks/use-get-payment-result-use-effect";
import useUpdatePaymentStatusResultSwalUseEffect from "./hooks/use-update-payment-status-of-booking-after-successful-payment-result-use-effect";
import useSendEmailAfterStatusUpdateErrorResultUseEffect from "./hooks/use-send-email-after-status-update-error-result-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ReloadedPageError from "./reloaded-page-error.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

const PaymentResult = () => {
  const { noPaymentStatusAndError } = useGetHandlePaymentSelectors();
  const { updatePaymentStatusIsLoading } = useGetBookingsSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  useGetPaymentResultUseEffect();
  useUpdatePaymentStatusResultSwalUseEffect();
  useSendEmailAfterStatusUpdateErrorResultUseEffect();

  return (
    <NoHeaderFooterContainer>
      {updatePaymentStatusIsLoading || sendEmailIsLoading ? (
        <SkeletonBox
          loadingText={
            updatePaymentStatusIsLoading
              ? "updating payment status..."
              : "sending email..."
          }
        />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">payment result</CustomBalancedText>
      </ParentDiv>
      {noPaymentStatusAndError ? <ReloadedPageError /> : null}
    </NoHeaderFooterContainer>
  );
};

export default PaymentResult;
