import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AddCatTitleAndLoader = () => {
  const { catDetailManagementIsLoading, catsName } =
    useGetCatDetailsManagementSelectors();

  return (
    <>
      {catDetailManagementIsLoading ? (
        <SkeletonBox loadingText={`adding ${catsName}...`} />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">add a cat</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default AddCatTitleAndLoader;
