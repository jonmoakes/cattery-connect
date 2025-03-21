import useGetBookingsSelectors from "../../hooks/selectors/use-get-bookings-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";
import useUpdatePaymentStatusResultSwalUseEffect from "./hooks/use-update-payment-status-of-booking-after-successful-payment-result-use-effect";
import useGetPaymentResultUseEffect from "./hooks/use-get-payment-result-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ReloadedPageError from "./reloaded-page-error.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  const { noPaymentStatusAndError } = useGetHandlePaymentSelectors();
  const { updatePaymentStatusIsLoading } = useGetBookingsSelectors();

  useGetPaymentResultUseEffect();
  useUpdatePaymentStatusResultSwalUseEffect();

  return (
    <NoHeaderFooterContainer>
      {updatePaymentStatusIsLoading ? (
        <SkeletonBox loadingText="updating payment status..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">payment result</CustomBalancedText>
      </ParentDiv>
      {noPaymentStatusAndError ? <ReloadedPageError /> : null}
    </NoHeaderFooterContainer>
  );
};

export default PaymentResult;
