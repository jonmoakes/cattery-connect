import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const Disclaimers = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">disclaimers:</CustomBalancedText>

    <CustomBalancedText>
      We strive to provide a reliable and high-quality service; however, we do
      not guarantee that access to the app will be uninterrupted or error-free.
    </CustomBalancedText>

    <CustomBalancedText>
      There may be instances where the app is unavailable due to maintenance,
      technical issues, or factors beyond our control.
    </CustomBalancedText>

    <CustomBalancedText>
      The app is provided "as is" without any warranties of any kind, express or
      implied. This includes, but is not limited to, implied warranties of
      merchantability, fitness for a particular purpose, and non-infringement.
    </CustomBalancedText>

    <CustomBalancedText>
      We do not warrant that the app will:
    </CustomBalancedText>

    <ul className="bullit">
      <li>Meet your specific requirements or expectations</li>
      <li>Achieve any intended results</li>
      <li>Be free of viruses or other harmful components</li>
    </ul>

    <CustomBalancedText>
      To the maximum extent permitted by applicable law,{" "}
      <a href="https://www.solaris-apps.co.uk" target="_blank" rel="noreferrer">
        solaris apps
      </a>{" "}
      shall not be liable for any indirect, incidental, special, consequential,
      or punitive damages, including but not limited to:
    </CustomBalancedText>

    <ul className="bullit">
      <li>
        Loss of profits, revenue, data, goodwill, or other intangible losses
      </li>
      <li>
        Any unauthorised access to or use of our servers or stored personal
        information
      </li>
      <li>Interruptions or failures in transmission to or from the app</li>
      <li>
        Any bugs, viruses, Trojan horses, or harmful components introduced by
        third parties Errors, omissions, or content inaccuracies leading to any
        loss or damage
      </li>
    </ul>

    <CustomBalancedText>
      In no event shall{" "}
      <a
        className="teal"
        href="https://www.solaris-apps.co.uk"
        target="_blank"
        rel="noreferrer"
      >
        solaris apps'
      </a>{" "}
      total liability to you for any claims arising from these terms or your use
      of the app exceed the total amount you have paid for the app’s use in the
      past twelve months.
    </CustomBalancedText>
  </ParentDiv>
);

export default Disclaimers;
