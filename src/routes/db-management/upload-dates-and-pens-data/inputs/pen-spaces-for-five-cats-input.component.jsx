import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BounceInDiv } from "../../../../styles/div/div.styles";
import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForFiveCatsInput = ({ handlePensChange }) => {
  const { penSpacesForFiveCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <BounceInDiv>
      <Label>
        pen spaces ( <CustomSpan className="yellow">for 5 cats</CustomSpan> ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForFiveCats"
        onChange={handlePensChange}
        value={penSpacesForFiveCats || ""}
      />
    </BounceInDiv>
  );
};

export default PenSpacesForFiveCatsInput;
