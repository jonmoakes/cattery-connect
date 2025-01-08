import PropTypes from "prop-types";

import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";

import { CapitalizedInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpPhone = ({ handleSignUpFormChange }) => {
  const { phoneNumber } = useGetSignUpFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>phone number:
      </Label>
      <CapitalizedInput
        type="tel"
        onChange={handleSignUpFormChange}
        name="phoneNumber"
        value={phoneNumber || ""}
      />
    </>
  );
};

SignUpPhone.propTypes = {
  handleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpPhone;
