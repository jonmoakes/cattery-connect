import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors.js";
import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import { toggleSignInPasswordIsVisible } from "../../store/password-is-visible/password-is-visible.slice";

import CustomSpan from "../../components/custom-span/custom-span.component";

import { RelativePositionDiv } from "../../styles/div/div.styles";
import { Label, PasswordInput } from "../../styles/form/form.styles";
import { SignInPasswordEye } from "../../styles/span/span.styles.jsx";

const SignInPassword = ({ handleSignInFormChange }) => {
  const { password } = useGetSignInFormSelectors();
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();

  const dispatch = useDispatch();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>password:
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

export default SignInPassword;
