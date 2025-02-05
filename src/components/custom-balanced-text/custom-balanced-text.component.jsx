import Balancer from "react-wrap-balancer";
import { OptionsLabel, WhiteText, YellowText } from "../../styles/p/p.styles";
import { TextDiv } from "../../styles/div/div.styles";

const componentMap = {
  h1: "h1",
  optionsLabel: OptionsLabel,
  white: WhiteText,
  yellow: YellowText,
};

const CustomBalancedText = ({ type, color, className, children }) => {
  const Component = componentMap[type] || componentMap[color] || "p";

  return (
    <TextDiv>
      <Balancer>
        <Component className={className}>{children}</Component>
      </Balancer>
    </TextDiv>
  );
};

export default CustomBalancedText;
