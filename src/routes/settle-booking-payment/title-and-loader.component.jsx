import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { attemptPaymentIsLoading } = useGetHandlePaymentSelectors();

  return (
    <>
      {attemptPaymentIsLoading ? (
        <SkeletonBox loadingText="please wait..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">
          settle a booking payment
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
