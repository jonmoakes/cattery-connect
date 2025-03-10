import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const DevelopmentPractices = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      secure develeopment practices
    </CustomBalancedText>

    <CustomBalancedText type="h3">Secure Coding:</CustomBalancedText>

    <CustomBalancedText>
      I follow secure coding practices to minimise the risk of common
      vulnerabilities, such as injection attacks, cross-site scripting (XSS),
      and security misconfigurations. My code is built with a focus on security
      at every stage of development.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">Code Reviews:</CustomBalancedText>
    <CustomBalancedText>
      While I am the sole developer, I regularly conduct thorough reviews of my
      own code to ensure it adheres to best practices and to identify and
      address potential security flaws before deploying any updates to
      production.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">Third-Party Libraries:</CustomBalancedText>

    <CustomBalancedText>
      I carefully vet and monitor third-party libraries and dependencies to
      ensure they meet high security standards and do not introduce
      vulnerabilities into the codebase.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default DevelopmentPractices;
