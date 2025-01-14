import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UploadDatesAndPensDataPmPens = ({ handleDatesAndPensChange }) => {
  const { numberofPmPensAvailable } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>number of PM pens available:
      </Label>
      <StyledInput
        type="text"
        name="numberofPmPensAvailable"
        onChange={handleDatesAndPensChange}
        value={numberofPmPensAvailable || ""}
        required
      />
    </>
  );
};

export default UploadDatesAndPensDataPmPens;
