import useSendContactFormMessageResultSwal from "./contact-form-hooks/use-send-contact-form-message-result-swal";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import ContactForm from "./sections/contact-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

const Contact = () => {
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  useSendContactFormMessageResultSwal();

  return (
    <Container>
      {sendEmailIsLoading ? (
        <SkeletonBox loadingText="Sending Message..." />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">contact us</CustomBalancedText>
      </ParentDiv>

      <ContactForm />
    </Container>
  );
};

export default Contact;
