import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { CentredDiv, ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const Prices = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h3">
        Limited-Time Founder’s Offer!
      </CustomBalancedText>

      <CustomBalancedText>
        Sign up <CustomSpan className="red">before 31st May 2025</CustomSpan>{" "}
        and lock in your special rate:
      </CustomBalancedText>

      <CentredDiv>
        <CustomBalancedText>
          <CustomSpan className="pricing">Just £20 per month!</CustomSpan>
        </CustomBalancedText>
      </CentredDiv>

      <BlackHr />
      <CustomBalancedText>
        or pay per year with a{" "}
        <CustomSpan className="red">10% discount</CustomSpan>
      </CustomBalancedText>

      <CentredDiv>
        <CustomBalancedText>
          <CustomSpan className="pricing">Just £216 per year!</CustomSpan>
        </CustomBalancedText>
      </CentredDiv>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        <CustomSpan className="red">🔹 after 31st May 2025</CustomSpan>, the
        price will be:
      </CustomBalancedText>

      <CentredDiv>
        <CustomBalancedText>
          <CustomSpan className="pricing">just £30 per month!</CustomSpan>
        </CustomBalancedText>
      </CentredDiv>

      <BlackHr />
      <CustomBalancedText>
        or pay per year with a{" "}
        <CustomSpan className="red">10% discount</CustomSpan>
      </CustomBalancedText>

      <CentredDiv>
        <CustomBalancedText>
          <CustomSpan className="pricing">just £324 per year!</CustomSpan>
        </CustomBalancedText>
      </CentredDiv>
    </ParentDiv>
  </>
);

export default Prices;
