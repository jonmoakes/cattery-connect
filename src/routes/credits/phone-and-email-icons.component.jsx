import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const PhoneAndEmailIcons = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">phone & email icons:</CustomBalancedText>
    <CustomBalancedText>
      <a
        href="https://icons8.com/icon/jShwZ2RCyPSO/phone"
        target="_blank"
        rel="noreferrer"
      >
        Phone
      </a>{" "}
      icon by{" "}
      <a href="https://icons8.com" target="_blank" rel="noreferrer">
        Icons8
      </a>
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      <a
        href=" https://icons8.com/icon/12623/email"
        target="_blank"
        rel="noreferrer"
      >
        email
      </a>{" "}
      icon by{" "}
      <a href="https://icons8.com" target="_blank" rel="noreferrer">
        Icons8
      </a>
    </CustomBalancedText>
  </ParentDiv>
);

export default PhoneAndEmailIcons;
