import { useState } from "react";

import PhoneNumberIcon from "./phone-number-icon.component";
import CustomSpan from "../custom-span/custom-span.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { ToggleShowPhoneNumberButton } from "../../styles/button/button.styles";

const PhoneNumberCell = ({ value }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <InLineDiv>
      {!value ? (
        "Not Provided"
      ) : (
        <>
          <ToggleShowPhoneNumberButton
            {...{ showPhone }}
            onClick={() => setShowPhone(!showPhone)}
          />

          {showPhone ? (
            <CustomSpan type="rightMargin" className="animate">
              {value}
            </CustomSpan>
          ) : null}
          <PhoneNumberIcon {...{ value }} />
        </>
      )}
    </InLineDiv>
  );
};

export default PhoneNumberCell;
