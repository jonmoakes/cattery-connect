import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors";

import CustomSpan from "../../components/custom-span/custom-span.component";

import { Label, LowercasedInput } from "../../styles/form/form.styles";

const SignInEmail = ({ handleSignInFormChange }) => {
  const { email } = useGetSignInFormSelectors();

  return (
    <>
      <Label>
        <CustomSpan color="red">* </CustomSpan>email:
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
