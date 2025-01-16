import useGetAddCatDetailsSelectors from "../../hooks/selectors/use-get-add-cat-details-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AddCatTitleAndLoader = () => {
  const { addCatIsLoading } = useGetAddCatDetailsSelectors();

  return (
    <>
      <ParentDiv>
        <h1>add a cat</h1>
      </ParentDiv>

      {addCatIsLoading ? <SkeletonBox loadingText="adding cat..." /> : null}
    </>
  );
};

export default AddCatTitleAndLoader;
