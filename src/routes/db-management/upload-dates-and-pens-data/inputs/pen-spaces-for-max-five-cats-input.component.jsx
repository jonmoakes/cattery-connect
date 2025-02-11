import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxFiveCatsInput = ({ handlePensChange }) => {
  const { penSpacesForMaxFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( max 5 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFiveCats"
        onChange={handlePensChange}
        value={penSpacesForMaxFiveCats || ""}
      />
    </>
  );
};

export default PenSpacesForMaxFiveCatsInput;
