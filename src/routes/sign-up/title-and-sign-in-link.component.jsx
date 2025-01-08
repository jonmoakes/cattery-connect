import { useDispatch } from "react-redux";

import { resetSignUpFormState } from "../../store/sign-up-form/sign-up-form.slice";

import { signInRoute } from "../../strings/routes";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";

const TitleAndSignInLink = () => {
  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <h1>sign up</h1>
      <BlackHr />
      <p>
        already have an account?
        <br />
        <StyledLink
          onClick={() => dispatch(resetSignUpFormState())}
          to={signInRoute}
        >
          sign in!
        </StyledLink>
      </p>
    </ParentDiv>
  );
};

export default TitleAndSignInLink;
