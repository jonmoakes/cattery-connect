import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import WhatIsThisPage from "./what-is-this-page.component";
import HowDoesItWork from "./how-does-it-work.component";
import PortalButton from "./portal-button.component";
import HowToCancel from "./how-to-cancel.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const CustomerPortal = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">customer portal</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        if you know what to do, tap the button below!
      </CustomBalancedText>

      <PortalButton />
      <WhatIsThisPage />
      <HowDoesItWork />
      <HowToCancel />
      <PortalButton />
    </ParentDiv>
  </Container>
);

export default CustomerPortal;
