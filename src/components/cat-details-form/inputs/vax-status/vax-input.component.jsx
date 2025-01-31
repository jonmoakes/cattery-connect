import { useLocation } from "react-router-dom";
import { InnerFormDiv } from "../../../../styles/div/div.styles";
import { Label } from "../../../../styles/form/form.styles";

import { vaccinationRadioChoices } from "../vaccination-radio-choices";

import { editCatRoute } from "../../../../strings/routes";

const VaxInput = ({ handleCatDetailsChange }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
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
              required={path !== editCatRoute ? true : false}
            />
            <hr />
          </InnerFormDiv>
        );
      })}
    </>
  );
};
export default VaxInput;
