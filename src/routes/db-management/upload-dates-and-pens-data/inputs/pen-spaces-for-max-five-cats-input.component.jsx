import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const PenSpacesForMaxFiveCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>pen spaces ( max 5 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFiveCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxFiveCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxFiveCatsInput;
