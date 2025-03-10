import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const GeographicRestrictions = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Geographic Restrictions</CustomBalancedText>
    <CustomBalancedText>
      The app is intended for use only by businesses based in the United Kingdom
      of Great Britain and Northern Ireland.
    </CustomBalancedText>
    <CustomBalancedText>
      By accessing or using the app, you represent and warrant that your
      business is legally registered and operates within the United Kingdom of
      Great Britain and Northern Ireland.
    </CustomBalancedText>
    <CustomBalancedText>
      We do not provide the app for use in any other locations, and we make no
      representations that the app is appropriate or available for use in other
      jurisdictions.
    </CustomBalancedText>
    <CustomBalancedText>
      Accessing the app from locations outside the United Kingdom of Great
      Britain and Northern Ireland is prohibited, and those who choose to access
      the app from outside the United Kingdom of Great Britain and Northern
      Ireland do so at their own risk and are responsible for compliance with
      local laws.
    </CustomBalancedText>
  </ParentDiv>
);

export default GeographicRestrictions;
