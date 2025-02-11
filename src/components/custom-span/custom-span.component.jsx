import {
  UppercaseSpan,
  LowercasedSpan,
  BackgroundSpan,
  ClearButtonExampleSpan,
  RightMarginSpan,
  EmergencyDetailsSpan,
} from "../../styles/span/span.styles";

const spanMap = {
  uppercase: UppercaseSpan,
  lowercase: LowercasedSpan,
  background: BackgroundSpan,
  clearButtonExample: ClearButtonExampleSpan,
  rightMargin: RightMarginSpan,
  emergencyDetails: EmergencyDetailsSpan,
};

const CustomSpan = ({ type, color, className, children, ...props }) => {
  const Component = spanMap[type] || spanMap[color] || "span";

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default CustomSpan;
