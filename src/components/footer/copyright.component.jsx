import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

const Copyright = () => (
  <>
    <CustomBalancedText>
      Copyright ©{" "}
      <a target="_blank" rel="noreferrer" href="https://www.solaris-apps.co.uk">
        Solaris Apps
      </a>{" "}
      2025
    </CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan type="lowercase">v</CustomSpan>1.0.0
    </CustomBalancedText>
  </>
);

export default Copyright;
