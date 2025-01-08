import PropTypes from "prop-types";

import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";

import { CapitalizedInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpName = ({ handleSignUpFormChange }) => {
  const { name } = useGetSignUpFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>name:
      </Label>
      <CapitalizedInput
        type="text"
        name="name"
        value={name || ""}
        onChange={handleSignUpFormChange}
        required
      />
    </>
  );
};

SignUpName.propTypes = {
  handleSignUpFormChange: PropTypes.func.isRequired,
};

export default SignUpName;
