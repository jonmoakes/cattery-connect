import { useState } from "react";

import PhoneNumberIcon from "./phone-number-icon.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { ToggleShowPhoneNumberButton } from "../../styles/button/button.styles";
import { RightMarginSpan } from "../../styles/span/span.styles";

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
            <RightMarginSpan className="animate">{value}</RightMarginSpan>
          ) : null}
          <PhoneNumberIcon {...{ value }} />
        </>
      )}
    </InLineDiv>
  );
};

export default PhoneNumberCell;
