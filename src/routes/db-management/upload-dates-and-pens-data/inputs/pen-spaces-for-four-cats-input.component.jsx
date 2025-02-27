import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForFourCatsInput = ({ handlePensChange }) => {
  const { penSpacesForFourCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( for 4 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForFourCats"
        onChange={handlePensChange}
        value={penSpacesForFourCats || ""}
      />
    </>
  );
};

export default PenSpacesForFourCatsInput;
