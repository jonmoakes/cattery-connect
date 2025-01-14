import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UploadDatesAndPensDataAmPens = ({ handleDatesAndPensChange }) => {
  const { numberofAmPensAvailable } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>number of AM pens available:
      </Label>
      <StyledInput
        type="text"
        name="numberofAmPensAvailable"
        onChange={handleDatesAndPensChange}
        value={numberofAmPensAvailable || ""}
        required
      />
    </>
  );
};

export default UploadDatesAndPensDataAmPens;
