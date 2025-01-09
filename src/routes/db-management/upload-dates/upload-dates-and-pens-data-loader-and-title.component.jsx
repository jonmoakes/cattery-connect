import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const UploadDatesAndPensDataLoaderAndTitle = () => {
  const { uploadDatesAndPensDataIsLoading } =
    useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      {uploadDatesAndPensDataIsLoading ? (
        <SkeletonBox loadingText="uploading dates" />
      ) : null}
      <ParentDiv>
        <h1>upload dates</h1>
      </ParentDiv>
    </>
  );
};

export default UploadDatesAndPensDataLoaderAndTitle;
