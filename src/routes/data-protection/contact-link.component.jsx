import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { ParentDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { contactRoute } from "../../strings/routes/routes-strings";
import { Text } from "../../styles/p/p.styles";

const ContactLink = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <Text>or use our form by tapping the button below.</Text>
      <YellowGreenButton onClick={() => hamburgerHandlerNavigate(contactRoute)}>
        contact us
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default ContactLink;
