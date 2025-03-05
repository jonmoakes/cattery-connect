import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";
import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect from "./upload-dates-hooks/use-get-all-cattery-ids-and-owner-name-array-thunk-use-effect";
import useUploadDatesAndPensDataResultSwalUseEffect from "./upload-dates-hooks/use-upload-dates-and-pens-data-result-swal-use-effect";
import useSubmitUploadDatesAndPensData from "./upload-dates-hooks/use-submit-upload-dates-and-pens-data";
import useHandleDatesAndPensChange from "./upload-dates-hooks/use-handle-data-and-pens-change";

import UploadDatesAndPensDataLoaderAndTitle from "./upload-dates-and-pens-data-loader-and-title.component";
import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import HelpAccordion from "../../../components/help-accordion/help-accordion.component";
import CatteryIdSelectInput from "./inputs/cattery-id-select-input/cattery-id-select-input.component";
import ClosedDatesQuestion from "./closed-dates-question.component";
import DaysOffInput from "./inputs/days-off-input.component";
import StartAndEndDatesDatePicker from "./inputs/start-and-end-dates-date-picker.component";
import PenSpacesForAnyNumberOfCatsInput from "./inputs/pen-spaces-for-any-number-of-cats-input.component";
import PenSpacesForOneOrTwoCatsInput from "./inputs/pen-spaces-for-one-or-two-cats-input.component";
import PenSpacesForThreeCatsInput from "./inputs/pen-spaces-for-three-cats-input.component";
import PenSpacesForFourCatsInput from "./inputs/pen-spaces-for-four-cats-input.component";
import PenSpacesForFiveCatsInput from "./inputs/pen-spaces-for-five-cats-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";
import { Form } from "../../../styles/form/form.styles";

import { uploadDatesAndPensInfoAccordionData } from "./upload-dates-and-pens-info-accordion-data";

const UploadDatesAndPensData = () => {
  const { allUsersCatteryIdsAndOwnerNameError } = useGetAllUsersSelectors();
  const {
    datesIncludeDaysClosed,
    startDate,
    endDate,
    anyInputOtherInputSet,
    penSpacesForAnyNumberOfCatsHasValue,
  } = useGetUploadDatesAndPensDataSelectors();
  const { handleDatesChange, handlePensChange } = useHandleDatesAndPensChange();
  const { submitUploadDatesAndPensData } = useSubmitUploadDatesAndPensData();

  useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect();
  useUploadDatesAndPensDataResultSwalUseEffect();

  return (
    <Container>
      <UploadDatesAndPensDataLoaderAndTitle />

      {allUsersCatteryIdsAndOwnerNameError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <HelpAccordion
            openText="uploading dates info"
            data={uploadDatesAndPensInfoAccordionData}
          />

          <Form
            className="no-margin-top"
            onSubmit={submitUploadDatesAndPensData}
          >
            <CatteryIdSelectInput />
            <ClosedDatesQuestion />

            <DaysOffInput />

            {datesIncludeDaysClosed ? (
              <>
                <StartAndEndDatesDatePicker
                  dateType="startDate"
                  selectedDate={startDate}
                  {...{ handleDatesChange }}
                />
                <StartAndEndDatesDatePicker
                  dateType="endDate"
                  selectedDate={endDate}
                  {...{ handleDatesChange }}
                />

                {anyInputOtherInputSet ? null : (
                  <PenSpacesForAnyNumberOfCatsInput {...{ handlePensChange }} />
                )}

                {penSpacesForAnyNumberOfCatsHasValue ? null : (
                  <>
                    <PenSpacesForOneOrTwoCatsInput {...{ handlePensChange }} />
                    <PenSpacesForThreeCatsInput {...{ handlePensChange }} />
                    <PenSpacesForFourCatsInput {...{ handlePensChange }} />
                    <PenSpacesForFiveCatsInput {...{ handlePensChange }} />
                  </>
                )}

                <Button type="submit">confirm upload dates</Button>
              </>
            ) : null}
          </Form>
        </ParentDiv>
      )}
    </Container>
  );
};

export default UploadDatesAndPensData;
