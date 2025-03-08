import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";

import ViewPenDataTitleAndLoader from "./view-pen-data-title-and-loader.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChoosePenDataDatePicker from "./choose-pen-data-date-picker.component";
import NextAndPreviousDatesButtons from "./next-and-previous-dates-buttons.component";
import PenDataSection from "./pen-availability-section.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

import { viewPenDataAccordionData } from "./view-pen-data-accordion-data";

const ViewPenData = () => {
  const {
    returnedChosenDate,
    chosenDatePenDataResult,
    chosenDatePenDataError,
    parsedMorningPens,
    parsedAfternoonPens,
  } = useGetViewPenDataSelectors();

  return (
    <Container>
      <ViewPenDataTitleAndLoader />

      {chosenDatePenDataError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <HelpAccordion
            openText="view pen data help"
            data={viewPenDataAccordionData}
          />

          <Form className="no-margin-top-small-margin-bottom">
            <ChoosePenDataDatePicker />
            <NextAndPreviousDatesButtons />
          </Form>

          {chosenDatePenDataResult === "fulfilled" ? (
            <>
              <PenDataSection
                title="morning"
                penData={parsedMorningPens}
                chosenDate={returnedChosenDate}
              />
              <PenDataSection
                title="afternoon"
                penData={parsedAfternoonPens}
                chosenDate={returnedChosenDate}
              />
            </>
          ) : null}
        </ParentDiv>
      )}
    </Container>
  );
};

export default ViewPenData;
