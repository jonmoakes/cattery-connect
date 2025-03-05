import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BounceInDiv } from "../../../../styles/div/div.styles";
import { Label, StyledInput } from "../../../../styles/form/form.styles";

const PenSpacesForAnyNumberOfCatsInput = ({ handlePensChange }) => {
  const { penSpacesForAnyNumberOfCats } =
    useGetUploadDatesAndPensDataSelectors();

  return (
    <BounceInDiv>
      <Label>
        pen spaces ( <CustomSpan className="yellow">Any no of cats</CustomSpan>{" "}
        ):
      </Label>
      <StyledInput
        type="text"
        name="penSpacesForAnyNumberOfCats"
        onChange={handlePensChange}
        value={penSpacesForAnyNumberOfCats || ""}
      />
    </BounceInDiv>
  );
};

export default PenSpacesForAnyNumberOfCatsInput;
