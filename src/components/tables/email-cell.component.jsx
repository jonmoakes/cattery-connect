import { useState } from "react";

import EmailIcon from "./email-icon.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { ToggleShowEmailButton } from "../../styles/button/button.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

const EmailCell = ({ value }) => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <InLineDiv>
      {value ? (
        <>
          <ToggleShowEmailButton
            {...{ showEmail }}
            onClick={() => setShowEmail(!showEmail)}
          />
          {showEmail ? (
            <LowercasedSpan className="right-margin animate">
              {value}
            </LowercasedSpan>
          ) : null}
          <EmailIcon {...{ value }} />
        </>
      ) : (
        "not provided"
      )}
    </InLineDiv>
  );
};

export default EmailCell;
