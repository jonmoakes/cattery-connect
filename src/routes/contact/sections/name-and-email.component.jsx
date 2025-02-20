import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";

import {
  StyledInput,
  Label,
  LowercasedInput,
} from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const NameAndEmail = ({ handleContactFormDetailsChange }) => {
  const { senderName, senderEmail } = useGetSendEmailSelectors();
  const { currentUser, email } = useGetCurrentUserSelectors();

  return (
    <>
      {!currentUser ? (
        <>
          <Label>
            <CustomSpan className="red">* </CustomSpan>Your Name:
          </Label>
          <StyledInput
            type="text"
            name="senderName"
            onChange={handleContactFormDetailsChange}
            value={senderName || ""}
            required
          />

          <Label>
            <CustomSpan className="red">* </CustomSpan>Your Email:
          </Label>
          <LowercasedInput
            type="email"
            name="senderEmail"
            onChange={handleContactFormDetailsChange}
            value={senderEmail || ""}
            required
          />
        </>
      ) : (
        <>
          <CustomBalancedText>
            as you are already, signed in, we will use your email address from
            when your account was created ({" "}
            <CustomSpan type="lowercase">{email}</CustomSpan> ) to reply to.
          </CustomBalancedText>
          <CustomBalancedText>
            if you want the response to be sent to a different email address,
            please specify it in the message. :)
          </CustomBalancedText>
          <BlackHr className="margin" />
        </>
      )}
    </>
  );
};

export default NameAndEmail;
