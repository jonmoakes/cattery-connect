import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxFourCatsInput = ({ handlePensChange }) => {
  const { penSpacesForMaxFourCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( max 4 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFourCats"
        onChange={handlePensChange}
        value={penSpacesForMaxFourCats || ""}
      />
    </>
  );
};

export default PenSpacesForMaxFourCatsInput;
