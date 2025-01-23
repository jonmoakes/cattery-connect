import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

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
        <h1>add a cat</h1>
      </ParentDiv>
    </>
  );
};

export default AddCatTitleAndLoader;
