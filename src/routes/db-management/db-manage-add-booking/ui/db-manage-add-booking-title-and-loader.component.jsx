import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useGetSendEmailSelectors from "../../../../hooks/selectors/use-get-send-email-selectors";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../../styles/div/div.styles";

const DbManageAddBookingTitleAndLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomerSelectors();
  const {
    requiredCatteryDataIsLoading,
    isBookingAvailableIsLoading,
    updatePensDataIsLoading,
    addBookingDataIsLoading,
  } = useGetDbManageAddBookingSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h1">add a booking</CustomBalancedText>
      </ParentDiv>

      {getAllCustomersIsLoading ||
      requiredCatteryDataIsLoading ||
      isBookingAvailableIsLoading ||
      updatePensDataIsLoading ||
      addBookingDataIsLoading ||
      sendEmailIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : requiredCatteryDataIsLoading
              ? "fetching required cattery data..."
              : isBookingAvailableIsLoading
              ? "Checking booking  Availability..."
              : updatePensDataIsLoading
              ? "updating pens data..."
              : addBookingDataIsLoading
              ? "adding booking data..."
              : sendEmailIsLoading && "sending email..."
          }
        />
      ) : null}
    </>
  );
};

export default DbManageAddBookingTitleAndLoader;
