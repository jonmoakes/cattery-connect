import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";

import Skeletonbox from "../../components/skeleton-box/skeleton-box.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { viewPenDataAccordionData } from "./view-pen-data-accordion-data";

const ViewPenDataTitleAndLoader = () => {
  const { chosenDatePenDataIsLoading, chosenDatePenDataError } =
    useGetViewPenDataSelectors();

  return (
    <>
      {chosenDatePenDataIsLoading ? (
        <Skeletonbox loadingText="Fetching Pen Data..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">pen data</CustomBalancedText>

        {!chosenDatePenDataError ? (
          <HelpAccordion
            className="neg-margin-top"
            openText="view pen data help"
            data={viewPenDataAccordionData}
          />
        ) : null}
      </ParentDiv>
    </>
  );
};

export default ViewPenDataTitleAndLoader;
