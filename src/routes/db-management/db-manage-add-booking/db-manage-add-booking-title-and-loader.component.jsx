import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const DbManageAddBookingTitleAndLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomerSelectors();
  const { dbManageIsBookingAvailableIsLoading } =
    useGetDbManageAddBookingSelectors();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h1">add a booking</CustomBalancedText>
      </ParentDiv>

      {getAllCustomersIsLoading || dbManageIsBookingAvailableIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : "Checking Availability..."
          }
        />
      ) : null}
    </>
  );
};

export default DbManageAddBookingTitleAndLoader;
