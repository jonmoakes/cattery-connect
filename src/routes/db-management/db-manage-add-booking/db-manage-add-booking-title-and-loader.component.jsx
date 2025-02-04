import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

const DbManageAddBookingTitleAndLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomerSelectors();
  const { dbManageIsBookingAvailableIsLoading } =
    useGetDbManageAddBookingSelectors();

  return (
    <>
      <ParentDiv>
        <h1>add a booking</h1>
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
