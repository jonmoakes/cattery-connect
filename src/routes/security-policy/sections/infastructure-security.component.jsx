import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const InfastructureSecurity = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Infrastructure Security</CustomBalancedText>

    <CustomBalancedText type="h3">Secure Hosting:</CustomBalancedText>

    <CustomBalancedText>
      Our app is hosted on secure servers with a leading cloud service provider.
      These providers adhere to stringent security standards and employ robust
      physical and environmental controls to safeguard our infrastructure.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">DDoS Protection:</CustomBalancedText>
    <CustomBalancedText>
      Our infrastructure includes built-in DDoS protection to mitigate attacks.
      A DDoS ( Distributed Denial of Service ) attack involves overwhelming our
      servers with traffic from multiple sources to disrupt service
      availability. Our systems are designed to detect and prevent such attacks,
      ensuring continuous service.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">
      Content Delivery Network ( CDN ):
    </CustomBalancedText>

    <CustomBalancedText>
      We use a global CDN to distribute content closer to users, enhancing both
      performance and security by reducing the attack surface.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">
      Continuous Deployment and Rollbacks:
    </CustomBalancedText>

    <CustomBalancedText>
      We support continuous deployment practices, allowing for automated and
      secure updates to the app. we have checks in place to ensure data
      integrity. If an update fails, but others succeed, an email is sent to our
      team with the relevant data, enabling us to manually update the database
      as needed. This ensures that we can address any issues promptly without
      compromising the integrity of the app.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default InfastructureSecurity;
