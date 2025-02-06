import {
  GreenSpan,
  RedSpan,
  WhiteSpan,
  YellowSpan,
  UppercaseSpan,
  LowercasedSpan,
  BackgroundSpan,
  ClearButtonExampleSpan,
  RightMarginSpan,
  EmergencyDetailsSpan,
} from "../../styles/span/span.styles";

// give a type or a color prop when passing
const spanMap = {
  uppercase: UppercaseSpan,
  lowercase: LowercasedSpan,
  background: BackgroundSpan,
  clearButtonExample: ClearButtonExampleSpan,
  rightMargin: RightMarginSpan,
  emergencyDetails: EmergencyDetailsSpan,
  white: WhiteSpan,
  yellow: YellowSpan,
  green: GreenSpan,
  red: RedSpan,
};

const CustomSpan = ({ type, color, className, children }) => {
  const Component = spanMap[type] || spanMap[color] || "span";

  return <Component className={className}>{children}</Component>;
};

export default CustomSpan;
