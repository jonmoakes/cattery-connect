import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForMaxTwoCatsInput = ({ handleDatesAndPensChange }) => {
  const { penSpacesForMaxTwoCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>pen spaces ( max 2 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForMaxTwoCats"
        onChange={handleDatesAndPensChange}
        value={penSpacesForMaxTwoCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForMaxTwoCatsInput;
