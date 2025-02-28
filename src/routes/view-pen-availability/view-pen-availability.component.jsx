import useGetViewPenAvailabilitySelectors from "../../hooks/selectors/use-get-view-pen-availability-selectors";

import ViewPenAvailabilityTitleAndLoader from "./view-pen-availability-title-and-loader.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChoosePenDataDatePicker from "./choose-pen-data-date-picker.component";
import PenAvailabilitySection from "./pen-availability-selection.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

import { viewPenAvailabilityAccordionData } from "./view-pen-availability-accordion-data";

const ViewPenAvailability = () => {
  const {
    returnedChosenDate,
    chosenDatePenDataResult,
    chosenDatePenDataError,
    parsedMorningPens,
    parsedAfternoonPens,
  } = useGetViewPenAvailabilitySelectors();

  return (
    <Container>
      <ViewPenAvailabilityTitleAndLoader />

      {chosenDatePenDataError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <HelpAccordion
            openText="view pen data help"
            data={viewPenAvailabilityAccordionData}
          />

          <Form className="no-margin-top-small-margin-bottom">
            <ChoosePenDataDatePicker />
          </Form>

          {chosenDatePenDataResult === "fulfilled" ? (
            <>
              <PenAvailabilitySection
                title="morning"
                penData={parsedMorningPens}
                chosenDate={returnedChosenDate}
              />
              <PenAvailabilitySection
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

export default ViewPenAvailability;
