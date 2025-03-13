import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";
import {
  hideSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
} from "../../store/password-is-visible/password-is-visible.slice";

import { RelativePositionDiv } from "../../styles/div/div.styles";
import { Label, PasswordInput } from "../../styles/form/form.styles";
import {
  SignUpConfirmPasswordEye,
  SignUpPasswordEye,
} from "../../styles/span/span.styles";
import CustomSpan from "../../components/custom-span/custom-span.component";

const SignUpPasswords = ({ handleSignUpFormChange }) => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { password, confirmPassword } = useGetSignUpFormSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpPasswordIsVisible && !password.length) {
      dispatch(hideSignUpPasswordIsVisible());
    } else if (signUpConfirmPasswordIsVisible && !confirmPassword.length) {
      dispatch(hideSignUpConfirmPasswordIsVisible());
    }
  }, [
    password,
    confirmPassword,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    dispatch,
  ]);

  return (
    <>
      <Label>
        <CustomSpan className="red">* </CustomSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={handleSignUpFormChange}
          placeholder="min 8 characters"
          required
          type={signUpPasswordIsVisible ? "text" : "password"}
        />

        {password && password.length ? (
          <SignUpPasswordEye
            {...{ signUpPasswordIsVisible }}
            onClick={() => dispatch(toggleSignUpPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>

      <Label>
        <CustomSpan className="red">* </CustomSpan>confirm password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          type={signUpConfirmPasswordIsVisible ? "text" : "password"}
          name="confirmPassword"
          onChange={handleSignUpFormChange}
          placeholder="confirm your password"
          required
        />

        {confirmPassword && confirmPassword.length ? (
          <SignUpConfirmPasswordEye
            {...{ signUpConfirmPasswordIsVisible }}
            onClick={() => dispatch(toggleSignUpConfirmPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignUpPasswords;
