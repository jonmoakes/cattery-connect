import PropTypes from "prop-types";

import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";

import { Label, StyledInput } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpEmail = ({ handleSignUpFormChange }) => {
  const { email } = useGetSignUpFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <StyledInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignUpFormChange}
        required
      />
    </>
  );
};

SignUpEmail.propTypes = {
  handleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpEmail;
