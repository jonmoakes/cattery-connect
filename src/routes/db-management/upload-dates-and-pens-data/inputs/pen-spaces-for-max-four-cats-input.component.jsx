import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxFourCatsInput = ({ handlePensChange }) => {
  const { penSpacesForMaxFourCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>pen spaces ( max 4 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFourCats"
        onChange={handlePensChange}
        value={penSpacesForMaxFourCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxFourCatsInput;
