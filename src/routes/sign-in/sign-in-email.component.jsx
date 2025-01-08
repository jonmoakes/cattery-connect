import PropTypes from "prop-types";

import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors";

import { StyledInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignInEmail = ({ handleSignInFormChange }) => {
  const { email } = useGetSignInFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <StyledInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignInFormChange}
        required
      />
    </>
  );
};

SignInEmail.propTypes = {
  handleSignInFormChange: PropTypes.func.isRequired,
};

export default SignInEmail;
