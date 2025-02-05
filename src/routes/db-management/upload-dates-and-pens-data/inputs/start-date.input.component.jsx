import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

import { showInvalidDateInfo } from "../../../../functions/show-invalid-date-info";

const StartDateInput = ({ handleDatesAndPensChange }) => {
  const { startDate } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>start date:
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
        <CustomBalancedText color="yellow">
          {showInvalidDateInfo(startDate)}
        </CustomBalancedText>
      ) : null}
    </>
  );
};

export default StartDateInput;
