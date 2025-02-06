import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

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
        <CustomBalancedText type="h1">upload dates</CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default UploadDatesAndPensDataLoaderAndTitle;
