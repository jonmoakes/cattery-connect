import PropTypes from "prop-types";

import { CapitalizedInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpPhone = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>phone number:
      </Label>
      <CapitalizedInput
        type="tel"
        onChange={dispatchHandleSignUpFormChange}
        name="phoneNumber"
        pattern="\d{11}"
        required
        title="Phone number must be 11 digits long."
      />
    </>
  );
};

SignUpPhone.propTypes = {
  dispatchHandleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpPhone;
