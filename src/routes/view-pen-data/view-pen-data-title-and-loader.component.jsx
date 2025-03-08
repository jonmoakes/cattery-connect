import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";

import Skeletonbox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const ViewPenDataTitleAndLoader = () => {
  const { chosenDatePenDataIsLoading } = useGetViewPenDataSelectors();

  return (
    <>
      {chosenDatePenDataIsLoading ? (
        <Skeletonbox loadingText="Fetching Pen Data..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">pen data</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default ViewPenDataTitleAndLoader;
