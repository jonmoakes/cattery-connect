import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useHandleSignUpFormError from "./sign-up-form-hooks/use-handle-sign-up-form-error";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import { resetSignUpFormState } from "../../store/sign-up-form/sign-up-form.slice";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import SignUpName from "./sign-up-name.component";
import useSignUpFormFunctions from "./sign-up-form-hooks/use-sign-up-form-functions";
import SignUpEmail from "./sign-up-email.component";
import SignUpPasswords from "./sign-up-passwords.component";
import SignUpButton from "./sign-up-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { signInRoute, accountRoute } from "../../strings/routes";
import SignUpPhone from "./sign-up-phone.component";
import useHandleSignUpFormSubmit from "./sign-up-form-hooks/use-handle-sign-up-form-submit";

const SignUp = () => {
  useHandleSignUpFormError();
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();
  const { handleSignUpFormSubmit } = useHandleSignUpFormSubmit();
  const { dispatchHandleSignUpFormChange } = useSignUpFormFunctions();
  const dispatch = useDispatch();

  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? (
        <SkeletonBox loadingText="Signing You Up..." />
      ) : null}

      <ParentDiv>
        <h1>sign up</h1>
        <p>sign up below! it's quick and secure!</p>
        <BlackHr />
        <p>
          already have an account?
          <br />
          <StyledLink
            onClick={() => dispatch(resetSignUpFormState())}
            to={signInRoute}
          >
            sign in!
          </StyledLink>
        </p>
      </ParentDiv>

      <ParentDiv>
        <Form onSubmit={handleSignUpFormSubmit}>
          <SignUpName {...{ dispatchHandleSignUpFormChange }} />
          <SignUpEmail {...{ dispatchHandleSignUpFormChange }} />
          <SignUpPhone {...{ dispatchHandleSignUpFormChange }} />
          <SignUpPasswords {...{ dispatchHandleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
