import Balancer from "react-wrap-balancer";
import { OptionsLabel } from "../../styles/p/p.styles";

// give an optional type when passing -defaults to <p></p>
const componentMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  optionsLabel: OptionsLabel,
};

const CustomBalancedText = ({ type, color, className, children }) => {
  const Component = componentMap[type] || componentMap[color] || "p";

  return (
    <Component className={className}>
      <Balancer>{children} </Balancer>
    </Component>
  );
};

export default CustomBalancedText;
