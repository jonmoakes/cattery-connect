import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForThreeCatsInput = ({ handlePensChange }) => {
  const { penSpacesForThreeCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( for 3 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForThreeCats"
        onChange={handlePensChange}
        value={penSpacesForThreeCats || ""}
      />
    </>
  );
};

export default PenSpacesForThreeCatsInput;
