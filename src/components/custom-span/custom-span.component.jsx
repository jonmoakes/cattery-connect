import {
  GreenSpan,
  RedSpan,
  WhiteSpan,
  YellowSpan,
  UppercaseSpan,
  LowercasedSpan,
  BackgroundSpan,
  SignInPasswordEye,
  ToggleResetPassword,
  ToggleResetPasswordConfirmPassword,
  ClearButtonExampleSpan,
  RightMarginSpan,
  EmergencyDetailsSpan,
} from "../../styles/span/span.styles";

const spanMap = {
  uppercase: UppercaseSpan,
  lowercase: LowercasedSpan,
  background: BackgroundSpan,
  signInPassword: SignInPasswordEye,
  toggleResetPassword: ToggleResetPassword,
  toggleResetConfirmPassword: ToggleResetPasswordConfirmPassword,
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
