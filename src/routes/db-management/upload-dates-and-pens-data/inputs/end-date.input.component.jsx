import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

import { showInvalidDateInfo } from "../../../../functions/show-invalid-date-info";

const EndDateInput = ({ handleDatesAndPensChange }) => {
  const { endDate } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>end date:
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
        <CustomBalancedText color="yellow">
          {showInvalidDateInfo(endDate)}
        </CustomBalancedText>
      ) : null}
    </>
  );
};

export default EndDateInput;
