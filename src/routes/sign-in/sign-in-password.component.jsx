import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors.js";
import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import { toggleSignInPasswordIsVisible } from "../../store/password-is-visible/password-is-visible.slice";

import { RelativePositionDiv } from "../../styles/div/div.styles";
import { Label, PasswordInput } from "../../styles/form/form.styles";
import { RedSpan, SignInPasswordEye } from "../../styles/span/span.styles";

const SignInPassword = ({ handleSignInFormChange }) => {
  const { password } = useGetSignInFormSelectors();
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();

  const dispatch = useDispatch();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={handleSignInFormChange}
          value={password || ""}
          required
          type={signInPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <SignInPasswordEye
            {...{ signInPasswordIsVisible }}
            onClick={() => dispatch(toggleSignInPasswordIsVisible())}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

SignInPassword.propTypes = {
  handleSignInFormChange: PropTypes.func.isRequired,
};

export default SignInPassword;
