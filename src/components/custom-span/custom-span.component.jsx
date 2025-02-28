import {
  UppercaseSpan,
  LowercasedSpan,
  BackgroundSpan,
  ClearButtonExampleSpan,
  RightMarginSpan,
  EmergencyDetailsSpan,
  UnderlinedSpan,
} from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

const spanMap = {
  uppercase: UppercaseSpan,
  lowercase: LowercasedSpan,
  background: BackgroundSpan,
  clearButtonExample: ClearButtonExampleSpan,
  rightMargin: RightMarginSpan,
  emergencyDetails: EmergencyDetailsSpan,
  link: StyledLink,
  underline: UnderlinedSpan,
};

const CustomSpan = ({ type, className, children, ...props }) => {
  const Component = spanMap[type] || "span";

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default CustomSpan;
