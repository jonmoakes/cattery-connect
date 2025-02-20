import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";

import useConfirmSendContactFormMessage from "../contact-form-hooks/use-confirm-send-contact-form-message";
import useSetContactFormNameAndEmailIfSignedIn from "../contact-form-hooks/use-set-contact-form-name-and-email-if-signed-in";
import useHandleContactFormDetailsChange from "../contact-form-hooks/use-handle-contact-form-details-change";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";
import NameAndEmail from "./name-and-email.component";
import SendMessageButton from "./send-message-button.component";

import { Form, StyledTextArea, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

import { maxTextAreaCharacterLength } from "../../../constants/constants";

const ContactForm = () => {
  const { senderMessage } = useGetSendEmailSelectors();

  const { handleContactFormDetailsChange } =
    useHandleContactFormDetailsChange();
  const { confirmSendContactFormMessage } = useConfirmSendContactFormMessage();
  useSetContactFormNameAndEmailIfSignedIn();

  return (
    <ParentDiv>
      <>
        <CustomBalancedText>
          <CustomSpan className="red">* </CustomSpan> = required field:
        </CustomBalancedText>

        <Form
          onSubmit={confirmSendContactFormMessage}
          className="no-margin-top"
        >
          <NameAndEmail {...{ handleContactFormDetailsChange }} />
          <Label>
            <CustomSpan className="red">* </CustomSpan>Your Message:
          </Label>
          <StyledTextArea
            type="text"
            name="senderMessage"
            onChange={handleContactFormDetailsChange}
            value={senderMessage || ""}
            maxLength={maxTextAreaCharacterLength}
            required
          />
          {senderMessage &&
          senderMessage.length === maxTextAreaCharacterLength ? (
            <CustomBalancedText>
              maximum message length reached.
            </CustomBalancedText>
          ) : null}
          <SendMessageButton />
        </Form>
      </>
    </ParentDiv>
  );
};

export default ContactForm;
