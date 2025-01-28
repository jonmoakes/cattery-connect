import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { YellowText } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";
import { showInvalidDateInfo } from "../../../../functions/show-invalid-date-info";

const StartDateInput = ({ handleDatesAndPensChange }) => {
  const { startDate } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>start date:
      </Label>
      <StyledInput
        type="text"
        name="startDate"
        onChange={handleDatesAndPensChange}
        value={startDate || ""}
        required
        placeholder="YYYY-MM-DD"
      />
      {showInvalidDateInfo(startDate) ? (
        <YellowText>{showInvalidDateInfo(startDate)}</YellowText>
      ) : null}
    </>
  );
};

export default StartDateInput;
