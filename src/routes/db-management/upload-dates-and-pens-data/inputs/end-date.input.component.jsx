import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { YellowText } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

import { showInvalidDateInfo } from "../../../../functions/show-invalid-date-info";

const EndDateInput = ({ handleDatesAndPensChange }) => {
  const { endDate } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>end date:
      </Label>
      <StyledInput
        type="text"
        name="endDate"
        onChange={handleDatesAndPensChange}
        value={endDate || ""}
        required
        placeholder="YYYY-MM-DD"
      />
      {showInvalidDateInfo(endDate) ? (
        <YellowText>{showInvalidDateInfo(endDate)}</YellowText>
      ) : null}
    </>
  );
};

export default EndDateInput;
