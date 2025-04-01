import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";
import useGetTodaysPenDataThunkUseEffect from "./view-pen-data-hooks/use-get-todays-pen-data-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import ViewPenDataTitleAndLoader from "./view-pen-data-title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChoosePenDataDatePicker from "./choose-pen-data-date-picker.component";
import NextAndPreviousDatesButtons from "../../components/next-and-previous-dates-buttons/next-and-previous-dates-buttons.component";
import PenDataSection from "./pen-availability-section.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const ViewPenData = () => {
  const {
    returnedChosenDate,
    chosenDatePenDataResult,
    chosenDatePenDataError,
    parsedMorningPens,
    parsedAfternoonPens,
  } = useGetViewPenDataSelectors();

  useGetTodaysPenDataThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - View Pen Data"
        description="View data about your pen capacity on a given day."
      />
      <ViewPenDataTitleAndLoader />

      {chosenDatePenDataError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <ChoosePenDataDatePicker />
          {returnedChosenDate ? (
            <NextAndPreviousDatesButtons className="margin" />
          ) : null}

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
