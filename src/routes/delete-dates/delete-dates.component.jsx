import useGetDeleteDatesVariables from "./hooks/use-get-delete-dates-variables";
import useConfirmFetchDateDocumentsToDelete from "./hooks/use-confirm-fetch-date-documents-to-delete";
import useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect from "../../hooks/use-get-all-cattery-ids-and-owner-name-array-thunk-use-effect";
import useHandleDateDataToPassChange from "./hooks/use-handle-date-data-to-pass-change";
import useDeleteDateDocumentsResultSwalUseEffect from "./hooks/use-delete-date-documents-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import TitleAndLoader from "./title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoDocumentsFound from "./no-documents-found.component";
import CatteryIdSelectInput from "./inputs/cattery-id-select-input.component";
import MonthInput from "./inputs/month-input.component";
import YearInput from "./inputs/year-input.component";
import GetDatesToDeleteButton from "./get-dates-to-delete-button.component";
import ReturnedDates from "./returned-dates.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const DeleteDates = () => {
  const { handleDateDataToPassChange } = useHandleDateDataToPassChange();
  const { confirmFetchDateDocumentsToDelete } =
    useConfirmFetchDateDocumentsToDelete();
  useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect();
  const {
    hasDateFetchingThunkError,
    notAttemptedDateFetchYet,
    fetchDatesDocsSucceeded,
  } = useGetDeleteDatesVariables();
  useDeleteDateDocumentsResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Delete Dates."
        description="Delete Past Dates From The Availability Collection."
      />

      <TitleAndLoader />
      {hasDateFetchingThunkError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <NoDocumentsFound />

          {notAttemptedDateFetchYet ? (
            <Form onSubmit={confirmFetchDateDocumentsToDelete}>
              <CatteryIdSelectInput {...{ handleDateDataToPassChange }} />
              <MonthInput {...{ handleDateDataToPassChange }} />
              <YearInput {...{ handleDateDataToPassChange }} />
              <GetDatesToDeleteButton />
            </Form>
          ) : fetchDatesDocsSucceeded ? (
            <ReturnedDates />
          ) : null}
        </ParentDiv>
      )}
    </Container>
  );
};

export default DeleteDates;
