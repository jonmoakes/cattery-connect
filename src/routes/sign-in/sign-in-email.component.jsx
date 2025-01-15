import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors";

import { Label, LowercasedInput } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignInEmail = ({ handleSignInFormChange }) => {
  const { email } = useGetSignInFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInEmail;
