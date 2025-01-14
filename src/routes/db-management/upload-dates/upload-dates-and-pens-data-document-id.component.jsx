import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UploadDatesAndPensDataDocumentId = ({ handleDatesAndPensChange }) => {
  const { documentId } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>document ID:
      </Label>
      <StyledInput
        type="text"
        name="documentId"
        onChange={handleDatesAndPensChange}
        value={documentId || ""}
        required
      />
    </>
  );
};

export default UploadDatesAndPensDataDocumentId;
