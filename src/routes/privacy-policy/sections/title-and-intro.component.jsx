import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const TitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">privacy policy</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText type="h2">introduction</CustomBalancedText>

      <CustomBalancedText>
        We are committed to protecting your privacy and ensuring the security of
        your personal information.
      </CustomBalancedText>

      <CustomBalancedText>
        This Privacy Policy explains how we collect, use, disclose, and protect
        your data when you use our app.
      </CustomBalancedText>

      <CustomBalancedText>
        Cattery Connect is designed to help catteries manage their business by
        allowing owners to make and cancel bookings, as well as store customer
        and cat details to ensure proper care for the animals.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default TitleAndIntro;
