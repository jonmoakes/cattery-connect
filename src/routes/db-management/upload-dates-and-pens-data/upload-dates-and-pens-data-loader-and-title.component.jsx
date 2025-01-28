import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

const UploadDatesAndPensDataLoaderAndTitle = () => {
  const { currentUserIsLoading } = useGetCurrentUserSelectors();
  const { uploadDatesAndPensDataIsLoading } =
    useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      {currentUserIsLoading || uploadDatesAndPensDataIsLoading ? (
        <SkeletonBox
          loadingText={
            currentUserIsLoading ? "Fetching Users..." : "uploading dates..."
          }
        />
      ) : null}

      <ParentDiv>
        <h1>upload dates</h1>
      </ParentDiv>
    </>
  );
};

export default UploadDatesAndPensDataLoaderAndTitle;
