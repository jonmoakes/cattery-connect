import useHandleSignUpFormErrorUseEffect from "./sign-up-form-hooks/use-handle-sign-up-form-error-use-effect";
import useSignUpFormSubmit from "./sign-up-form-hooks/use-sign-up-form-submit";
import useHandleSignUpFormChange from "./sign-up-form-hooks/use-handle-sign-up-form-change";
import useSignUpPasswordIsVisibleUseEffect from "./sign-up-form-hooks/use-sign-up-password-is-visible-use-effect";

import AuthNavAndLoader from "../../components/auth-nav-and-loader/auth-nav-and-loader.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import SignUpCustomerId from "./sign-up-customer-id.component";
import SignUpPasswords from "./sign-up-passwords.component";

import SignUpButton from "./sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { signUpAccordionData } from "./sign-up-accordion-data";

const SignUp = () => {
  useHandleSignUpFormErrorUseEffect();
  useSignUpPasswordIsVisibleUseEffect();
  const { signUpFormSubmit } = useSignUpFormSubmit();
  const { handleSignUpFormChange } = useHandleSignUpFormChange();

  return (
    <Container>
      <AuthNavAndLoader />
      <ParentDiv>
        <CustomBalancedText type="h1">sign up</CustomBalancedText>
        <HelpAccordion
          className="neg-margin-top"
          openText="why should i sign up?"
          data={signUpAccordionData}
        />
      </ParentDiv>

      <ParentDiv>
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
