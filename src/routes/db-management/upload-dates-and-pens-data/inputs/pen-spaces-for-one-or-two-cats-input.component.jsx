import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForOneOrTwoCatsInput = ({ handlePensChange }) => {
  const { penSpacesForOneOrTwoCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <>
      <Label>
        <CustomSpan className="red">* </CustomSpan>pen spaces ( 1 or 2 cats ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForOneOrTwoCats"
        onChange={handlePensChange}
        value={penSpacesForOneOrTwoCats || ""}
        required
      />
    </>
  );
};

export default PenSpacesForOneOrTwoCatsInput;
