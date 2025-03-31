import useGetMoveCustomerToNewCatterySelectors from "../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const {
    checkCustomerCanBeMovedIsLoading,
    updateCustomerCatteryIdIsLoading,
    updateCatsCatteryIdsIsLoading,
  } = useGetMoveCustomerToNewCatterySelectors();

  return (
    <>
      {checkCustomerCanBeMovedIsLoading ||
      updateCustomerCatteryIdIsLoading ||
      updateCatsCatteryIdsIsLoading ? (
        <SkeletonBox
          loadingText={
            checkCustomerCanBeMovedIsLoading
              ? "checking for outstanding payments..."
              : updateCustomerCatteryIdIsLoading
              ? "updating customers cattery ID"
              : updateCatsCatteryIdsIsLoading && "updating cats catteryIds"
          }
        />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">
          move customer to a new cattery
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
