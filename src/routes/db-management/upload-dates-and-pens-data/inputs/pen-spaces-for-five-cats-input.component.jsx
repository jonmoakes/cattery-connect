import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForFiveCatsInput = ({ handlePensChange }) => {
  const { penSpacesForFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>pen spaces ( for 5 cats ):</Label>
      <StyledInput
        type="text"
        name="penSpacesForFiveCats"
        onChange={handlePensChange}
        value={penSpacesForFiveCats || ""}
      />
    </>
  );
};

export default PenSpacesForFiveCatsInput;
