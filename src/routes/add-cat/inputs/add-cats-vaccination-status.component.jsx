import { InnerFormDiv } from "../../../styles/div/div.styles";
import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

import { vaccinationRadioChoices } from "./vaccination-radio-choices";

const AddCatsVaccinationStatus = ({ handleAddCatsDetailsChange }) => (
  <>
    <BlackHr />
    <Label className="margin">
      <RedSpan>* </RedSpan>vaccination status:
    </Label>

    {vaccinationRadioChoices.map((choice) => {
      const { id, label, value } = choice;
      return (
        <InnerFormDiv key={id}>
          <Label className="no-padding">{label}</Label>
          <input
            type="radio"
            name="vaccinationStatus"
            value={value}
            onChange={handleAddCatsDetailsChange}
            required
          />
          <hr />
        </InnerFormDiv>
      );
    })}
  </>
);

export default AddCatsVaccinationStatus;
