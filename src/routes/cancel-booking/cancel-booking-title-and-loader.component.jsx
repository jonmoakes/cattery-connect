import useGetCancelBookingSelectors from "../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetUpdatePensDataSelectors from "../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const CancelBookingTitleAndLoader = () => {
  const { fetchAvailabilityDocsToUpdateIsLoading, deleteBookingDataIsLoading } =
    useGetCancelBookingSelectors();
  const { updatePensDataIsLoading } = useGetUpdatePensDataSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  return (
    <>
      {fetchAvailabilityDocsToUpdateIsLoading ||
      deleteBookingDataIsLoading ||
      updatePensDataIsLoading ||
      sendEmailIsLoading ? (
        <SkeletonBox
          loadingText={
            fetchAvailabilityDocsToUpdateIsLoading
              ? "fetching required data..."
              : updatePensDataIsLoading
              ? "updating pen data..."
              : deleteBookingDataIsLoading
              ? "deleting booking data..."
              : sendEmailIsLoading && "sending email..."
          }
        />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">cancel booking</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default CancelBookingTitleAndLoader;
