import { useState } from "react";

import EmailIcon from "./email-icon.component";
import CustomSpan from "../custom-span/custom-span.component";

import { InLineDiv } from "../../styles/div/div.styles";
import { ToggleShowEmailButton } from "../../styles/button/button.styles";

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
            <CustomSpan type="lowercase" className="right-margin animate">
              {value}
            </CustomSpan>
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
