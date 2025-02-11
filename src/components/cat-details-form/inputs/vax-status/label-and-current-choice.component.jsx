import CustomSpan from "../../../custom-span/custom-span.component";

import { VaxStatusDiv } from "../../../../styles/div/div.styles";
import { Label } from "../../../../styles/form/form.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const LabelAndCurrentChoice = ({ vaccinationStatus }) => (
  <>
    <BlackHr />
    <Label className="margin">
      <CustomSpan className="red">* </CustomSpan>vaccination status:
    </Label>

    {vaccinationStatus ? (
      <VaxStatusDiv>
        <CustomSpan className="white">your current selection is:</CustomSpan>
        <br />
        <CustomSpan className="green">{vaccinationStatus}</CustomSpan>
      </VaxStatusDiv>
    ) : null}
  </>
);

export default LabelAndCurrentChoice;
