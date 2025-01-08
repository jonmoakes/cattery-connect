import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../store/sign-in-form/sign-in-form.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { signUpRoute } from "../../strings/routes";

const TitleAndSignUpLink = () => {
  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <h1>sign in</h1>
      <BlackHr />
      <p>
        don't have an account yet?
        <br />
        <StyledLink
          onClick={() => dispatch(resetSignInFormState())}
          to={signUpRoute}
        >
          sign up!
        </StyledLink>
      </p>
    </ParentDiv>
  );
};

export default TitleAndSignUpLink;
