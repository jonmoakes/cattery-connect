import useGetIndividualCustomersCatsSelectors from "../../hooks/selectors/use-get-individual-customers-cats-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { individualCustomersCatsIsLoading } =
    useGetIndividualCustomersCatsSelectors();
  return (
    <>
      {individualCustomersCatsIsLoading ? (
        <SkeletonBox loadingText="fetching cat data..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">your cats</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
