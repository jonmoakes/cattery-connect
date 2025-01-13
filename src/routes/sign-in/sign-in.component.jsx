import useHandleSignInFormErrorUseEffect from "./sign-in-form-hooks/use-handle-sign-in-form-error-use-effect";
import useSignInFormSubmit from "./sign-in-form-hooks/use-sign-in-form-submit";
import useHandleSignInFormChange from "./sign-in-form-hooks/use-handle-sign-in-form-change";
import useSignInPasswordIsVisibleUseEffect from "./sign-in-form-hooks/use-sign-in-password-is-visible-use-effect";

import AuthNavAndLoader from "../../components/auth-nav-and-loader/auth-nav-and-loader.component";
import SignInEmail from "./sign-in-email.component";
import SignInPassword from "./sign-in-password.component";
import SignInButtons from "./sign-in-buttons.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const SignIn = () => {
  useHandleSignInFormErrorUseEffect();
  useSignInPasswordIsVisibleUseEffect();
  const { signInFormSubmit } = useSignInFormSubmit();
  const { handleSignInFormChange } = useHandleSignInFormChange();

  return (
    <Container>
      <AuthNavAndLoader />
      <ParentDiv>
        <h1>sign in</h1>
      </ParentDiv>

      <ParentDiv>
        <Form onSubmit={signInFormSubmit}>
          <SignInEmail {...{ handleSignInFormChange }} />
          <SignInPassword {...{ handleSignInFormChange }} />
          <SignInButtons />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
