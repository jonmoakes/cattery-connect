import { useEffect } from "react";
import PropTypes from "prop-types";

import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";
import useSignUpFormFunctions from "./sign-up-form-hooks/use-sign-up-form-functions";

import { RelativePositionDiv } from "../../styles/div/div.styles";
import { Label, PasswordInput } from "../../styles/form/form.styles";
import {
  SignUpConfirmPasswordEye,
  SignUpPasswordEye,
  RedSpan,
} from "../../styles/span/span.styles";

import {
  minEightCharacters,
  confirmYourPassword,
} from "../../strings/placeholders";

const SignUpPasswords = ({ dispatchHandleSignUpFormChange }) => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { password, confirmPassword } = useGetSignUpFormSelectors();
  const {
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
    dispatchToggleSignUpPasswordIsVisible,
    dispatchToggleSignUpConfirmPasswordIsVisible,
  } = useSignUpFormFunctions();

  useEffect(() => {
    if (signUpPasswordIsVisible && !password.length) {
      dispatchHideSignUpPasswordIsVisible();
    } else if (signUpConfirmPasswordIsVisible && !confirmPassword.length) {
      dispatchHideSignUpConfirmPasswordIsVisible();
    }
  }, [
    password,
    confirmPassword,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
  ]);

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={dispatchHandleSignUpFormChange}
          placeholder={minEightCharacters}
          minLength="8"
          required
          type={signUpPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <SignUpPasswordEye
            {...{ signUpPasswordIsVisible }}
            onClick={dispatchToggleSignUpPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>

      <Label>
        <RedSpan>* </RedSpan>confirm password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          type={signUpConfirmPasswordIsVisible ? "text" : "password"}
          name="confirmPassword"
          onChange={dispatchHandleSignUpFormChange}
          placeholder={confirmYourPassword}
          minLength="8"
          required
        />

        {confirmPassword.length ? (
          <SignUpConfirmPasswordEye
            {...{ signUpConfirmPasswordIsVisible }}
            onClick={dispatchToggleSignUpConfirmPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

SignUpPasswords.propTypes = {
  dispatchHandleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpPasswords;
