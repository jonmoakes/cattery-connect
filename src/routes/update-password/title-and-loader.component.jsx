import useGetGenerateNewPasswordRequestSelectors from "../../hooks/selectors/use-get-generate-new-password-request-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { updatePasswordAccordionData } from "./update-password-accordion-data";

const TitleAndLoader = () => {
  const { generateNewPasswordRequestIsLoading } =
    useGetGenerateNewPasswordRequestSelectors();

  return (
    <>
      {generateNewPasswordRequestIsLoading ? (
        <SkeletonBox loadingText="please wait..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">update your password</CustomBalancedText>

        <HelpAccordion
          className="no-margin-top"
          openText="help"
          data={updatePasswordAccordionData}
        />
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
