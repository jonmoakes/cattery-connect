import PropTypes from "prop-types";

import { Label, StyledInput } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpEmail = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <StyledInput
        type="email"
        name="email"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

SignUpEmail.propTypes = {
  dispatchHandleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpEmail;
