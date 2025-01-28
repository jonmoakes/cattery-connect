import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const PenSpacesForMaxTwoCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxTwoCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>pen spaces ( max 2 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxTwoCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxTwoCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxTwoCatsInput;
