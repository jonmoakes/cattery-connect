import useHandleSignInFormErrorUseEffect from "./sign-in-form-hooks/use-handle-sign-in-form-error-use-effect";
import useSignInFormSubmit from "./sign-in-form-hooks/use-sign-in-form-submit";
import useHandleSignInFormChange from "./sign-in-form-hooks/use-handle-sign-in-form-change";
import useSignInPasswordIsVisibleUseEffect from "./sign-in-form-hooks/use-sign-in-password-is-visible-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import AuthNavAndLoader from "../../components/auth-nav-and-loader/auth-nav-and-loader.component";
import TitleAndSignUpLink from "./title-and-sign-up-link.component";
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
      <Metadata
        title="Cattery Connect - Sign In"
        description="Sign in to your Cattery Connect account to manage your cattery bookings, customers, and more."
      />
      <AuthNavAndLoader />
      <TitleAndSignUpLink />

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
