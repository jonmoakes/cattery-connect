import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BounceInDiv } from "../../../../styles/div/div.styles";
import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForOneOrTwoCatsInput = ({ handlePensChange }) => {
  const { penSpacesForOneOrTwoCats } = useGetUploadDatesAndPensDataSelectors();

  return (
    <BounceInDiv>
      <Label>
        pen spaces ( <CustomSpan className="yellow">1 or 2 cats</CustomSpan> ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForOneOrTwoCats"
        onChange={handlePensChange}
        value={penSpacesForOneOrTwoCats || ""}
      />
    </BounceInDiv>
  );
};

export default PenSpacesForOneOrTwoCatsInput;
