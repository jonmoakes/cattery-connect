import useGetUpdateEmailSelectors from "../../hooks/selectors/use-get-update-email-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { updateEmailAccordionData } from "./update-email-accordion-data";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

const TitleAndLoader = () => {
  const { role } = useGetCurrentUserSelectors();
  const { updateEmailIsLoading } = useGetUpdateEmailSelectors();

  return (
    <>
      {updateEmailIsLoading ? (
        <SkeletonBox loadingText="updating your email..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">
          update your email address
        </CustomBalancedText>

        {role === "customer" ? (
          <HelpAccordion
            className="no-margin-top"
            openText="help"
            data={updateEmailAccordionData}
          />
        ) : null}
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
