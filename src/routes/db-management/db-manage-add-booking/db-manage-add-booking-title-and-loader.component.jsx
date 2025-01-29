import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const DbManageAddBookingTitleAndLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomerSelectors();

  return (
    <>
      <ParentDiv>
        <h1>add a booking</h1>
      </ParentDiv>

      {getAllCustomersIsLoading ? (
        <SkeletonBox loadingText="fetching customers..." />
      ) : null}
    </>
  );
};

export default DbManageAddBookingTitleAndLoader;
