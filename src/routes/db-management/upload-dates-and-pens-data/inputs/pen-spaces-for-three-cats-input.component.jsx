import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BounceInDiv } from "../../../../styles/div/div.styles";
import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForThreeCatsInput = ({ handlePensChange }) => {
  const { penSpacesForThreeCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <BounceInDiv>
      <Label>
        pen spaces ( <CustomSpan className="yellow">for 3 cats</CustomSpan> ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForThreeCats"
        onChange={handlePensChange}
        value={penSpacesForThreeCats || ""}
      />
    </BounceInDiv>
  );
};

export default PenSpacesForThreeCatsInput;
