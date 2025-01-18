import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";

const EditCatTitleAndLoader = ({ cat }) => {
  const { catDetailManagementIsLoading } =
    useGetCatDetailsManagementSelectors();

  return (
    <>
      {catDetailManagementIsLoading ? (
        <SkeletonBox loadingText="editing cat..." />
      ) : null}

      <ParentDiv>
        <h1>edit {cat.catsName}</h1>
      </ParentDiv>
    </>
  );
};

export default EditCatTitleAndLoader;
