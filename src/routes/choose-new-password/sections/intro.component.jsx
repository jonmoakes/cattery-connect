import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";

const Intro = () => (
  <>
    <ParentDiv>
      <h1>
        <Balancer>create your new password</Balancer>
      </h1>
    </ParentDiv>

    <ParentDiv>
      <p>
        <Balancer>
          enter in your new password, then retype it to confirm it.
        </Balancer>
      </p>
      <p>
        <Balancer>
          then tap the "update password" button when it appears.
        </Balancer>
      </p>
    </ParentDiv>
  </>
);

export default Intro;
