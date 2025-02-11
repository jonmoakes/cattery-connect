import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxThreeCatsInput = ({ handlePensChange }) => {
  const { penSpacesForMaxThreeCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( max 3 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxThreeCats"
        onChange={handlePensChange}
        value={penSpacesForMaxThreeCats || ""}
      />
    </>
  );
};

export default PenSpacesForMaxThreeCatsInput;
