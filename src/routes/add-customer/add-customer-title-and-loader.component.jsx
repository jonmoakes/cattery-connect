import useGetAddCustomerDetailsSelectors from "../../hooks/selectors/use-get-add-customer-details-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AddCustomerTitleAndLoader = () => {
  const { addCustomerIsLoading } = useGetAddCustomerDetailsSelectors();

  return (
    <>
      {addCustomerIsLoading ? (
        <SkeletonBox loadingText="creating customer" />
      ) : null}
      <ParentDiv>
        <h1>add a customer</h1>
      </ParentDiv>
    </>
  );
};

export default AddCustomerTitleAndLoader;
