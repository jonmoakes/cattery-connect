import useHandleSignUpFormErrorUseEffect from "./sign-up-form-hooks/use-handle-sign-up-form-error-use-effect";
import useSignUpPasswordIsVisibleUseEffect from "./sign-up-form-hooks/use-sign-up-password-is-visible-use-effect";
import useHandleSignUpFormSubmit from "./sign-up-form-hooks/use-handle-sign-up-form-submit";
import useHandleSignUpFormChange from "./sign-up-form-hooks/use-handle-sign-up-form-change";

import AuthNavAndLoader from "../../components/auth-nav-and-loader/auth-nav-and-loader.component";
import TitleAndSignInLink from "./title-and-sign-in-link.component";
import SignUpName from "./sign-up-name.component";
import SignUpEmail from "./sign-up-email.component";
import SignUpPhone from "./sign-up-phone.component";
import SignUpPasswords from "./sign-up-passwords.component";
import SignUpButton from "./sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const SignUp = () => {
  useHandleSignUpFormErrorUseEffect();
  useSignUpPasswordIsVisibleUseEffect();
  const { handleSignUpFormSubmit } = useHandleSignUpFormSubmit();
  const { handleSignUpFormChange } = useHandleSignUpFormChange();

  return (
    <Container>
      <AuthNavAndLoader />
      <TitleAndSignInLink />

      <ParentDiv>
        <Form onSubmit={handleSignUpFormSubmit}>
          <SignUpName {...{ handleSignUpFormChange }} />
          <SignUpEmail {...{ handleSignUpFormChange }} />
          <SignUpPhone {...{ handleSignUpFormChange }} />
          <SignUpPasswords {...{ handleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
