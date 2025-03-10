import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const CookiesTitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">cookie policy</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        Our app uses cookies, local storage, and similar technologies to enhance
        your experience, improve our services, and understand how users interact
        with our app.
      </CustomBalancedText>
      <CustomBalancedText>
        This Cookie Policy explains what cookies are, how we use them, and how
        you can control your preferences regarding their use.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default CookiesTitleAndIntro;
