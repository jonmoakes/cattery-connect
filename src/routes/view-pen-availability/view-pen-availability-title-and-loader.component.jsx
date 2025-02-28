import useGetViewPenAvailabilitySelectors from "../../hooks/selectors/use-get-view-pen-availability-selectors";

import Skeletonbox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const ViewPenAvailabilityTitleAndLoader = () => {
  const { chosenDatePenDataIsLoading } = useGetViewPenAvailabilitySelectors();

  return (
    <>
      {chosenDatePenDataIsLoading ? (
        <Skeletonbox loadingText="Fetching Pen Data..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">pen availability</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default ViewPenAvailabilityTitleAndLoader;
