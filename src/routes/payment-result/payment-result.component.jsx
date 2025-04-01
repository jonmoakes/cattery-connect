import useGetBookingsSelectors from "../../hooks/selectors/use-get-bookings-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

import useGetPaymentResultUseEffect from "./hooks/use-get-payment-result-use-effect";
import useUpdatePaymentStatusResultSwalUseEffect from "./hooks/use-update-payment-status-of-booking-after-successful-payment-result-use-effect";
import useSendEmailAfterStatusUpdateErrorResultUseEffect from "./hooks/use-send-email-after-status-update-error-result-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ReloadedPageError from "./reloaded-page-error.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  const { noPaymentStatusAndError } = useGetHandlePaymentSelectors();
  const { updatePaymentStatusIsLoading } = useGetBookingsSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  useGetPaymentResultUseEffect();
  useUpdatePaymentStatusResultSwalUseEffect();
  useSendEmailAfterStatusUpdateErrorResultUseEffect();

  return (
    <NoHeaderFooterContainer>
      <Metadata
        title="Cattery Connect - Payment Result"
        description="View the result of your payment process. Receive Any Errors From A Payment Attempt."
      />

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
