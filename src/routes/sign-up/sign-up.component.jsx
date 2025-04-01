import useHandleSignUpFormErrorUseEffect from "./sign-up-form-hooks/use-handle-sign-up-form-error-use-effect";
import useSignUpFormSubmit from "./sign-up-form-hooks/use-sign-up-form-submit";
import useHandleSignUpFormChange from "./sign-up-form-hooks/use-handle-sign-up-form-change";
import useSignUpPasswordIsVisibleUseEffect from "./sign-up-form-hooks/use-sign-up-password-is-visible-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import AuthNavAndLoader from "../../components/auth-nav-and-loader/auth-nav-and-loader.component";
import TitleAndSignInLink from "./title-and-sign-in-link.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";

import SignUpCustomerId from "./sign-up-customer-id.component";
import SignUpPasswords from "./sign-up-passwords.component";
import SignUpButton from "./sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

import { passwordAccordionData } from "./password-accodion-data";

const SignUp = () => {
  useHandleSignUpFormErrorUseEffect();
  useSignUpPasswordIsVisibleUseEffect();
  const { signUpFormSubmit } = useSignUpFormSubmit();
  const { handleSignUpFormChange } = useHandleSignUpFormChange();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Sign Up"
        description="Create your Cattery Connect account to start managing bookings, customers, and cattery operations efficiently."
      />
      <AuthNavAndLoader />
      <TitleAndSignInLink />

      <ParentDiv>
        <HelpAccordion
          className="password-security"
          openText="password advice"
          data={passwordAccordionData}
        />
        <Form onSubmit={signUpFormSubmit}>
          <SignUpCustomerId {...{ handleSignUpFormChange }} />
          <SignUpPasswords {...{ handleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
