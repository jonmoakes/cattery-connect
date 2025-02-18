import useCancelBookingVariables from "./cancel-booking-hooks/use-cancel-booking-variables";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const CancelBookingTitleAndLoader = () => {
  const {
    updatePensDataIsLoading,
    fetchAvailabilityDocsToUpdateIsLoading,
    deleteBookingDataIsLoading,
  } = useCancelBookingVariables();

  return (
    <>
      {fetchAvailabilityDocsToUpdateIsLoading ||
      deleteBookingDataIsLoading ||
      updatePensDataIsLoading ? (
        <SkeletonBox
          loadingText={
            fetchAvailabilityDocsToUpdateIsLoading
              ? "fetching required data..."
              : updatePensDataIsLoading
              ? "updating pen availability..."
              : deleteBookingDataIsLoading && "deleting booking data..."
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
