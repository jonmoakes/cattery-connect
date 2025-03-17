import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const EyeIcon = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">eye icon:</CustomBalancedText>
    <CustomBalancedText>
      <a
        href="https://icons8.com/icon/60022/eye"
        target="_blank"
        rel="noreferrer"
      >
        eye
      </a>{" "}
      icon by{" "}
      <a href="https://icons8.com" target="_blank" rel="noreferrer">
        Icons8
      </a>
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      <a
        href="https://icons8.com/icon/34226/hide"
        target="_blank"
        rel="noreferrer"
      >
        Hide
      </a>{" "}
      icon by{" "}
      <a href="https://icons8.com" target="_blank" rel="noreferrer">
        Icons8
      </a>
    </CustomBalancedText>
  </ParentDiv>
);

export default EyeIcon;
