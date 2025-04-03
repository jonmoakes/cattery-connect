import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { updatePriceIsLoading } = useGetUpdatePriceSelectors();

  return (
    <>
      {updatePriceIsLoading ? (
        <SkeletonBox loadingText="updating price..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">
          update your price per night
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
