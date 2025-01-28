import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const PenSpacesForMaxThreeCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxThreeCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>pen spaces ( max 3 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxThreeCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxThreeCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxThreeCatsInput;
