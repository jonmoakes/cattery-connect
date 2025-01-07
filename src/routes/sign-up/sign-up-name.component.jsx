import PropTypes from "prop-types";

import { CapitalizedInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpName = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>name:
      </Label>
      <CapitalizedInput
        type="text"
        name="name"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

SignUpName.propTypes = {
  dispatchHandleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpName;
