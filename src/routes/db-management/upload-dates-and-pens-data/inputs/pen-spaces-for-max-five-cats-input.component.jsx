import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxFiveCatsInput = ({ handlePensChange }) => {
  const { penSpacesForMaxFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>pen spaces ( max 5 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxFiveCats"
        onChange={handlePensChange}
        value={penSpacesForMaxFiveCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxFiveCatsInput;
