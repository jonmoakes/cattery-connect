import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxFiveCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>pen spaces ( max 5 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFiveCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxFiveCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxFiveCatsInput;
