import Balancer from "react-wrap-balancer";
import { OptionsLabel, WhiteText, YellowText } from "../../styles/p/p.styles";
import { TextDiv } from "../../styles/div/div.styles";

// give a type or a color prop when passing
const componentMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  optionsLabel: OptionsLabel,
  white: WhiteText,
  yellow: YellowText,
};

const CustomBalancedText = ({ type, color, className, children }) => {
  const Component = componentMap[type] || componentMap[color] || "p";

  return (
    <TextDiv>
      <Component className={className}>
        <Balancer>{children} </Balancer>
      </Component>
    </TextDiv>
  );
};

export default CustomBalancedText;
