import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";
import {
  toggleSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
} from "../../store/password-is-visible/password-is-visible.slice";

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

const SignUpPasswords = ({ handleSignUpFormChange }) => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { password, confirmPassword } = useGetSignUpFormSelectors();

  const dispatch = useDispatch();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          value={password || ""}
          onChange={handleSignUpFormChange}
          placeholder={minEightCharacters}
          minLength="8"
          required
          type={signUpPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <SignUpPasswordEye
            {...{ signUpPasswordIsVisible }}
            onClick={() => dispatch(toggleSignUpPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>

      <Label>
        <RedSpan>* </RedSpan>confirm password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="confirmPassword"
          value={confirmPassword || ""}
          onChange={handleSignUpFormChange}
          placeholder={confirmYourPassword}
          minLength="8"
          required
          type={signUpConfirmPasswordIsVisible ? "text" : "password"}
        />

        {confirmPassword.length ? (
          <SignUpConfirmPasswordEye
            {...{ signUpConfirmPasswordIsVisible }}
            onClick={() => dispatch(toggleSignUpConfirmPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

SignUpPasswords.propTypes = {
  handleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpPasswords;
