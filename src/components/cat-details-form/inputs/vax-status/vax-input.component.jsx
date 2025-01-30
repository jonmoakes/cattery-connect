import { InnerFormDiv } from "../../../../styles/div/div.styles";
import { Label } from "../../../../styles/form/form.styles";

import { vaccinationRadioChoices } from "../vaccination-radio-choices";

const VaxInput = ({ handleCatDetailsChange }) => (
  <>
    {vaccinationRadioChoices.map((choice) => {
      const { id, label, value } = choice;
      return (
        <InnerFormDiv key={id}>
          <Label className="no-padding">{label}</Label>
          <input
            type="radio"
            name="vaccinationStatus"
            value={value}
            onChange={handleCatDetailsChange}
            required
          />
          <hr />
        </InnerFormDiv>
      );
    })}
  </>
);
export default VaxInput;
