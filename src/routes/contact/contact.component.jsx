import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

import useGetEmailAddressForCustomerThunkUseEffect from "./contact-form-hooks/use-get-email-address-for-customer-thunk-use-effect";
import useSendContactFormMessageResultSwal from "./contact-form-hooks/use-send-contact-form-message-result-swal";

import Metadata from "../../components/metadata/metadata.component";
import TitleAndLoader from "./sections/title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ContactForm from "./sections/contact-form.component";

import { Container } from "../../styles/container/container.styles";

const Contact = () => {
  const { getCatteryEmailError } = useGetSendEmailSelectors();
  useGetEmailAddressForCustomerThunkUseEffect();
  useSendContactFormMessageResultSwal();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Contact"
        description="Contact Cattery Connect for questions, support, or to start your free trial. Reach out to streamline your cattery management today!"
        ogTitle="Contact Cattery Connect"
        ogDescription="Have questions about Cattery Connect? Contact us to learn more, get support, or start your free trial for easy cattery management!"
      />

      <TitleAndLoader />

      {getCatteryEmailError ? <ShowFetchErrors /> : <ContactForm />}
    </Container>
  );
};

export default Contact;
