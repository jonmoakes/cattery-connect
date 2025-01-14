import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UploadDatesAndPensDataYear = ({ handleDatesAndPensChange }) => {
  const { year } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>year:
      </Label>
      <StyledInput
        type="text"
        name="year"
        onChange={handleDatesAndPensChange}
        value={year || ""}
        required
      />
    </>
  );
};

export default UploadDatesAndPensDataYear;
