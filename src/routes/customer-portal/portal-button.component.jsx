import { Button } from "../../styles/button/button.styles";

import { customerPortalLinkTwfc } from "../../constants/stripe-constants";

//will run a function based on catteryID here once more than one cattery.
const PortalButton = () => {
  const portalLink = customerPortalLinkTwfc;

  return (
    <>
      <a href={portalLink} target="_blank" rel="noreferrer">
        <Button className="teal">launch portal</Button>
      </a>
    </>
  );
};

export default PortalButton;
