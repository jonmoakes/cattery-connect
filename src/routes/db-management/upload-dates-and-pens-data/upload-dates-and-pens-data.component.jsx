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
import DaysOffInput from "./inputs/days-off-input/days-off-input.component";
import StartDateInput from "./inputs/start-date.input.component";
import EndDateInput from "./inputs/end-date.input.component";
import PenSpacesForMaxTwoCatsInput from "./inputs/pen-spaces-for-max-two-cats-input.component";
import PenSpacesForMaxThreeCatsInput from "./inputs/pen-spaces-for-max-three-cats-input.component";
import PenSpacesForMaxFourCatsInput from "./inputs/pen-spaces-for-max-four-cats-input.component";
import PenSpacesForMaxFiveCatsInput from "./inputs/pen-spaces-for-max-five-cats-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";
import { Form } from "../../../styles/form/form.styles";

import { uploadDatesAndPensInfoAccordionData } from "./upload-dates-and-pens-info-accordion-data";

const UploadDatesAndPensData = () => {
  const { allUsersCatteryIdsAndOwnerNameError } = useGetAllUsersSelectors();
  const { datesIncludeDaysClosed } = useGetUploadDatesAndPensDataSelectors();
  useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect();
  useUploadDatesAndPensDataResultSwalUseEffect();

  const { handleDatesAndPensChange } = useHandleDatesAndPensChange();
  const { submitUploadDatesAndPensData } = useSubmitUploadDatesAndPensData();

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
                <StartDateInput {...{ handleDatesAndPensChange }} />
                <EndDateInput {...{ handleDatesAndPensChange }} />
                <PenSpacesForMaxTwoCatsInput
                  {...{ handleDatesAndPensChange }}
                />
                <PenSpacesForMaxThreeCatsInput
                  {...{ handleDatesAndPensChange }}
                />
                <PenSpacesForMaxFourCatsInput
                  {...{ handleDatesAndPensChange }}
                />
                <PenSpacesForMaxFiveCatsInput
                  {...{ handleDatesAndPensChange }}
                />
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
