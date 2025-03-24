import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { contactRoute } from "../../strings/routes";

const ContactLink = ({ text }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {text ? (
        <ParentDiv>
          <CustomBalancedText>{text}</CustomBalancedText>
          <Button
            className="teal"
            onClick={() => hamburgerHandlerNavigate(contactRoute)}
          >
            contact me
          </Button>
        </ParentDiv>
      ) : (
        <Button
          className="teal"
          onClick={() => hamburgerHandlerNavigate(contactRoute)}
        >
          contact me
        </Button>
      )}
    </>
  );
};

export default ContactLink;
