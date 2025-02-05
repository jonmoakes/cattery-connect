import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxThreeCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxThreeCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>pen spaces ( max 3 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxThreeCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxThreeCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxThreeCatsInput;
