import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BounceInDiv } from "../../../../styles/div/div.styles";
import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForFourCatsInput = ({ handlePensChange }) => {
  const { penSpacesForFourCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <BounceInDiv>
      <Label>
        pen spaces ( <CustomSpan className="yellow">for 4 cats</CustomSpan> ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForFourCats"
        onChange={handlePensChange}
        value={penSpacesForFourCats || ""}
      />
    </BounceInDiv>
  );
};

export default PenSpacesForFourCatsInput;
