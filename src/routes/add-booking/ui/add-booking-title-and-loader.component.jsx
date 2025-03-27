import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUpdatePensDataSelectors from "../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const AddBookingTitleAndLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomerSelectors();
  const { updatePensDataIsLoading } = useGetUpdatePensDataSelectors();
  const { uploadBookingDataIsLoading } = useGetUploadBookingDataSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { catteryDetailsIsLoading } = useGetCatteryDetailsSelectors();
  const { isBookingAvailableIsLoading } = useGetIsBookingAvailableSelectors();
  const { individualCustomersCatsIsLoading } =
    useGetIndividualCustomersCatsSelectors();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h1">add a booking</CustomBalancedText>
      </ParentDiv>

      {getAllCustomersIsLoading ||
      catteryDetailsIsLoading ||
      isBookingAvailableIsLoading ||
      updatePensDataIsLoading ||
      uploadBookingDataIsLoading ||
      individualCustomersCatsIsLoading ||
      sendEmailIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : catteryDetailsIsLoading
              ? "fetching required cattery data..."
              : isBookingAvailableIsLoading
              ? "Checking booking  Availability..."
              : updatePensDataIsLoading
              ? "updating pens data..."
              : uploadBookingDataIsLoading
              ? "adding booking data..."
              : individualCustomersCatsIsLoading
              ? "fetching customers cats..."
              : sendEmailIsLoading && "sending email..."
          }
        />
      ) : null}
    </>
  );
};

export default AddBookingTitleAndLoader;
