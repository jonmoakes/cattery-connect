import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { contactRoute, pricingRoute } from "../../../strings/routes";
import { ParentDiv } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Button } from "../../../styles/button/button.styles";

const AboutOutro = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h2">
          it’s time to take your cattery’s management to the next level!
        </CustomBalancedText>
        <CustomBalancedText>
          Cattery Connect is designed to streamline your cattery’s operations,
          making it easier than ever to manage bookings, customer and cat
          details, payments, schedules, and availability.
        </CustomBalancedText>
        <CustomBalancedText>
          With features like the daily schedule, pen availability tracker, and
          seamless payment integration, you can focus on providing the best care
          for your feline guests without the stress of manual tracking or
          paperwork.
        </CustomBalancedText>
      </ParentDiv>

      <ParentDiv>
        <CustomBalancedText>
          If you have any questions or need further assistance, please don't
          hesitate to <StyledLink to={contactRoute}>contact me</StyledLink>!
        </CustomBalancedText>
      </ParentDiv>

      <ParentDiv>
        <CustomBalancedText>view our</CustomBalancedText>
        <Button
          className="teal"
          onClick={() => hamburgerHandlerNavigate(pricingRoute)}
        >
          pricing
        </Button>
      </ParentDiv>
    </>
  );
};

export default AboutOutro;
