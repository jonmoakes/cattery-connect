import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SecurityMeasures = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Security Measures:</CustomBalancedText>

    <CustomBalancedText>
      We implement robust security measures to protect your personal
      information:
    </CustomBalancedText>

    <CustomBalancedText>
      We use a leading{" "}
      <a
        className="teal"
        href="https://en.wikipedia.org//wiki/Open_source"
        target="_blank"
        rel="noreferrer"
      >
        Open source
      </a>{" "}
      data service provider, allowing public scrutiny of their code to quickly
      identify and resolve security vulnerabilities.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">data encryption</CustomBalancedText>

    <CustomBalancedText>
      All data is encrypted both at rest and in transit using industry-standard
      protocols (TLS for data in transit).
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">
      Secure Authentication & Access Control:
    </CustomBalancedText>

    <CustomBalancedText>
      We implement secure authentication methods (e.g., email & password, OAuth)
      and role-based access control (RBAC) to manage permissions and verify
      identities.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Secure Storage:</CustomBalancedText>

    <CustomBalancedText>
      Files and data are securely stored with strict access controls.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">
      Activity Monitoring & Logging:
    </CustomBalancedText>

    <CustomBalancedText>
      We maintain detailed logs of user activities and API requests to detect
      suspicious activity and ensure compliance with security policies. Audit
      trails provide a historical record of data access and modifications.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Data Segregation & CORS:</CustomBalancedText>

    <CustomBalancedText>
      We deploy our data service provider in isolated environments to ensure
      data segregation and implement CORS to restrict which domains can access
      our resources.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Automated Backups:</CustomBalancedText>

    <CustomBalancedText>
      We perform regular automated backups to ensure data can be restored if
      needed.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Payment Security:</CustomBalancedText>

    <CustomBalancedText>
      <a
        className="teal"
        href="https://stripe.com/gb"
        target="_blank"
        rel="noreferrer"
      >
        Stripe
      </a>{" "}
      is our chosen payment processor, ensuring secure transactions for both
      owners and customers.
    </CustomBalancedText>

    <CustomBalancedText type="h3">For owners:</CustomBalancedText>

    <CustomBalancedText>
      We create a dedicated Stripe account for you, giving you full control over
      your finances.
    </CustomBalancedText>

    <CustomBalancedText type="h3">
      For both owners and customers:
    </CustomBalancedText>

    <CustomBalancedText>
      PCI Compliance:
      <br />
      Stripe is a certified PCI Service Provider Level 1, adhering to the
      highest industry standards for payment security.
    </CustomBalancedText>

    <CustomBalancedText>
      Data Encryption: <br />
      All payment data is encrypted using AES-256 encryption at rest and TLS for
      data in transit.
    </CustomBalancedText>

    <CustomBalancedText>
      Tokenisation: <br />
      Sensitive card information is replaced with a unique token, ensuring
      payment details are never stored on our servers.
    </CustomBalancedText>

    <CustomBalancedText>
      Fraud Prevention: <br />
      Stripe Radar uses advanced machine learning to detect and prevent
      fraudulent transactions in real time.
    </CustomBalancedText>

    <CustomBalancedText>
      Secure Infrastructure: <br />
      Stripe’s data centres comply with top industry standards for physical
      security and availability.
    </CustomBalancedText>

    <CustomBalancedText>
      Monitoring & Logging: <br />
      Continuous monitoring and audit logs help detect and mitigate potential
      security threats.
    </CustomBalancedText>

    <CustomBalancedText>
      Strong Access Controls: <br />
      Stripe enforces role-based access control and two-factor authentication to
      prevent unauthorised access.
    </CustomBalancedText>

    <CustomBalancedText>
      By leveraging these security measures, we ensure your personal information
      remains protected against unauthorised access, use, and disclosure.
    </CustomBalancedText>

    <CustomBalancedText>
      If you have any questions or concerns about our data security practices,
      please contact us at:
    </CustomBalancedText>

    <CustomBalancedText>
      <CustomSpan type="lowercase">jonathan@solaris-apps.co.uk</CustomSpan>
    </CustomBalancedText>

    <CustomBalancedText>or</CustomBalancedText>

    <CustomBalancedText>
      <CustomSpan type="lowercase">admin@cattery-connect.co.uk</CustomSpan>
    </CustomBalancedText>
  </ParentDiv>
);

export default SecurityMeasures;
