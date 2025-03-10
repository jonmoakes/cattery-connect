import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const ManagingCookies = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">managing cookies:</CustomBalancedText>

    <CustomBalancedText>
      You can control and manage cookies in several ways. However, please note
      that removing or blocking cookies may affect your user experience, and
      some features of the app may no longer be available.
    </CustomBalancedText>
    <CustomBalancedText type="h3"> Browser Settings:</CustomBalancedText>

    <CustomBalancedText>
      Most web browsers allow you to manage cookies through their settings. You
      can set your browser to block cookies, alert you about them, or delete
      them when you close the browser. Check your browser’s help section for
      instructions on how to adjust these settings.
    </CustomBalancedText>
  </ParentDiv>
);

export default ManagingCookies;
