import { VaxStatusDiv } from "../../../../styles/div/div.styles";
import { Label } from "../../../../styles/form/form.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";
import {
  RedSpan,
  WhiteSpan,
  YellowSpan,
} from "../../../../styles/span/span.styles";

const LabelAndCurrentChoice = ({ vaccinationStatus }) => (
  <>
    <BlackHr />
    <Label className="margin">
      <RedSpan>* </RedSpan>vaccination status:
    </Label>

    {vaccinationStatus ? (
      <VaxStatusDiv>
        <WhiteSpan>current selection:</WhiteSpan>
        <br />
        <YellowSpan>{vaccinationStatus}</YellowSpan>
        <BlackHr />
      </VaxStatusDiv>
    ) : null}
  </>
);

export default LabelAndCurrentChoice;
