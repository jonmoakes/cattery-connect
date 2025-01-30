import { VaxStatusDiv } from "../../../../styles/div/div.styles";
import { Label } from "../../../../styles/form/form.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import {
  RedSpan,
  WhiteSpan,
  GreenSpan,
} from "../../../../styles/span/span.styles";

const LabelAndCurrentChoice = ({ vaccinationStatus }) => (
  <>
    <BlackHr />
    <Label className="margin">
      <RedSpan>* </RedSpan>vaccination status:
    </Label>

    {vaccinationStatus ? (
      <VaxStatusDiv>
        <WhiteSpan>your current selection is:</WhiteSpan>
        <br />
        <GreenSpan>{vaccinationStatus}</GreenSpan>
      </VaxStatusDiv>
    ) : null}
  </>
);

export default LabelAndCurrentChoice;
