import useGetCustomerDetailsSelectors from "../../hooks/selectors/use-get-customer-details-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AddCustomerTitleAndLoader = () => {
  const { customerIsLoading } = useGetCustomerDetailsSelectors();

  return (
    <>
      {customerIsLoading ? (
        <SkeletonBox loadingText="creating customer" />
      ) : null}
      <ParentDiv>
        <h1>add a customer</h1>
      </ParentDiv>
    </>
  );
};

export default AddCustomerTitleAndLoader;
