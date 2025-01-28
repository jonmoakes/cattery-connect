import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const PenSpacesForMaxFourCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxFourCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>pen spaces ( max 4 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFourCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxFourCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxFourCatsInput;
