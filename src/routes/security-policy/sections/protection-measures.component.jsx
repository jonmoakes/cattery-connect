import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ProtectionMeasures = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Data Protection Measures</CustomBalancedText>

    <CustomBalancedText type="h3">encryption:</CustomBalancedText>

    <CustomBalancedText>
      We use industry-standard encryption protocols (such as TLS) to protect
      data transmitted between your device and our servers.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Access Controls:</CustomBalancedText>
    <CustomBalancedText>
      Access to user data is strictly controlled and limited to authorised
      personnel only. We implement role-based access controls (RBAC) to ensure
      that access is granted on a need-to-know basis.
    </CustomBalancedText>

    <BlackHr />
    <CustomBalancedText type="h3">Data Minimisation:</CustomBalancedText>
    <CustomBalancedText>
      We collect and retain only the data necessary for the operation of our app
      and the provision of our services. Personal information is anonymised or
      pseudonymised whenever possible.
    </CustomBalancedText>

    <BlackHr />
    <CustomBalancedText type="h3">regular Audits:</CustomBalancedText>
    <CustomBalancedText>
      We conduct regular security audits and assessments to identify and address
      potential vulnerabilities in our systems and infrastructure.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default ProtectionMeasures;
