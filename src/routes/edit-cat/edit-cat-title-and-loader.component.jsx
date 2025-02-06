import useEditCatVariables from "./edit-cat-hooks/use-edit-cat-variables";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const EditCatTitleAndLoader = () => {
  const { catDetailManagementIsLoading, catsName } = useEditCatVariables();

  return (
    <>
      {catDetailManagementIsLoading ? (
        <SkeletonBox loadingText={`updating ${catsName}...`} />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">edit {catsName}</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default EditCatTitleAndLoader;
