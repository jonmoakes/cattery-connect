import useGetDeleteDatesSelectors from "../../hooks/selectors/use-get-delete-dates-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { getDateDocumentsToDeleteIsLoading, deleteDateDocumentsIsLoading } =
    useGetDeleteDatesSelectors();

  return (
    <>
      {getDateDocumentsToDeleteIsLoading || deleteDateDocumentsIsLoading ? (
        <SkeletonBox
          loadingText={
            getDateDocumentsToDeleteIsLoading
              ? "getting date documents to delete..."
              : "deleting documents...  "
          }
        />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">delete dates</CustomBalancedText>
        <CustomBalancedText>
          this is to be done on the 1st of every month.
        </CustomBalancedText>
        <CustomBalancedText>
          delete the previous months dates for all catteries to keep DB space
          down.
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
