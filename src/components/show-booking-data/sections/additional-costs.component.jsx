import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAdditionalCosts } from "../../../store/upload-booking-data/upload-booking-data.slice";

import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";

import { AdditionalCostsDiv } from "../../../styles/div/div.styles";
import { StyledInput } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../styles/button/button.styles";

const AdditionalCosts = ({ additionalCosts }) => {
  const dispatch = useDispatch();
  const [showAdditionalCosts, setShowAdditionalCosts] = useState(false);

  const handleAdditionalCostsChange = (event) => {
    dispatch(setAdditionalCosts(event.target.value));
  };

  const handleRemoveAdditionalCosts = () => {
    if (additionalCosts > "0") {
      dispatch(setAdditionalCosts(""));
    }
    setShowAdditionalCosts(false);
  };

  return (
    <>
      <AdditionalCostsDiv>
        {!showAdditionalCosts ? (
          <>
            <CustomBalancedText>
              need to add additional costs?
            </CustomBalancedText>
            <MinimalButton
              type="button"
              className="additional-costs"
              onClick={() => setShowAdditionalCosts(true)}
            >
              {showAdditionalCosts ? "cancel additional costs" : "click here"}
            </MinimalButton>
          </>
        ) : null}

        {showAdditionalCosts ? (
          <>
            <CustomBalancedText>
              please enter the amount to add to the total cost
              <br />( PENCE please ) below.
            </CustomBalancedText>
            <CustomBalancedText>
              the total cost of the booking will be updated automatically as you
              type.
            </CustomBalancedText>

            <BlackHr />

            <StyledInput
              type="text"
              inputMode="numeric"
              pattern="\d*"
              name="additionalCosts"
              value={additionalCosts}
              onChange={handleAdditionalCostsChange}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ];
                const isDigit = /^\d$/.test(e.key);
                if (!isDigit && !allowedKeys.includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onPaste={(e) => {
                e.preventDefault();
              }}
              placeholder="ie 1000 for £10"
            />
          </>
        ) : null}
        {showAdditionalCosts ? (
          <MinimalButton
            type="button"
            className="cancel-additional-costs"
            onClick={handleRemoveAdditionalCosts}
          >
            cancel additional costs
          </MinimalButton>
        ) : null}
      </AdditionalCostsDiv>
    </>
  );
};

export default AdditionalCosts;
