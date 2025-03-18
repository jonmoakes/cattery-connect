import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { role } = useGetCurrentUserSelectors();
  const { sendEmailIsLoading, getCatteryEmailIsLoading } =
    useGetSendEmailSelectors();

  return (
    <>
      {sendEmailIsLoading || getCatteryEmailIsLoading ? (
        <SkeletonBox
          loadingText={
            getCatteryEmailIsLoading
              ? "fetching cattery email"
              : sendEmailIsLoading && "Sending Message..."
          }
        />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">
          contact {role === "owner" ? "me" : "us"}
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
