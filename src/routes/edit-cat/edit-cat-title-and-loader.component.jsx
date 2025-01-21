import useEditCatVariables from "./edit-cat-hooks/use-edit-cat-variables";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";

const EditCatTitleAndLoader = () => {
  const { catDetailManagementIsLoading, catsName } = useEditCatVariables();

  return (
    <>
      {catDetailManagementIsLoading ? (
        <SkeletonBox loadingText="editing cat..." />
      ) : null}

      <ParentDiv>
        <h1>edit {catsName}</h1>
      </ParentDiv>
    </>
  );
};

export default EditCatTitleAndLoader;
