import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const UserRights = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">User Rights:</CustomBalancedText>

    <CustomBalancedText>
      You have the following rights regarding your personal data:
    </CustomBalancedText>

    <CustomBalancedText type="h3">Access:</CustomBalancedText>

    <CustomBalancedText>
      You can request access to the personal information we hold about you, your
      business, your customers, and their cats.
    </CustomBalancedText>

    <BlackHr />
    <CustomBalancedText type="h3">Correction:</CustomBalancedText>

    <CustomBalancedText>
      You can request corrections to any inaccurate or incomplete information.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">deletion:</CustomBalancedText>

    <CustomBalancedText>
      You can request the deletion of your personal data.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">restriction:</CustomBalancedText>

    <CustomBalancedText>
      You can request restrictions on the processing of your data under certain
      circumstances.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Data Portability:</CustomBalancedText>

    <CustomBalancedText>
      You have the right to request a copy of your data in a structured,
      commonly used, and machine-readable format.
    </CustomBalancedText>

    <CustomBalancedText>
      To exercise any of these rights, please contact us at:
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

export default UserRights;
