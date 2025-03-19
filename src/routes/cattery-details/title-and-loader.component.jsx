import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { catteryDetailsIsLoading } = useGetCatteryDetailsSelectors();
  return (
    <>
      {catteryDetailsIsLoading ? (
        <SkeletonBox loadingText="Fetching cattery details..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">your cattery details</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
