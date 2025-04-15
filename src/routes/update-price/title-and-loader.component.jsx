import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";

const TitleAndLoader = () => {
  const { catteryDetailsIsLoading } = useGetCatteryDetailsSelectors();
  const { updatePriceIsLoading } = useGetUpdatePriceSelectors();

  return (
    <>
      {catteryDetailsIsLoading || updatePriceIsLoading ? (
        <SkeletonBox
          loadingText={
            catteryDetailsIsLoading
              ? "fetching current prices..."
              : updatePriceIsLoading && "updating prices..."
          }
        />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">update your prices</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
