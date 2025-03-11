import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const BookingsAndCancellations = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      bookings and cancellations:
    </CustomBalancedText>

    <CustomBalancedText>
      Owners are responsible for booking and cancelling stays for their
      customers cats through the app, having agreed upon the duration, price,
      and cat details beforehand.
    </CustomBalancedText>

    <CustomBalancedText>
      Cattery Connect is not responsible for enforcing agreements,
      cancellations, or refunds between owners and customers.
    </CustomBalancedText>

    <CustomBalancedText>
      The administrator can make and cancel bookings or perform other requests
      if required, but only under the express instruction of the owner (who must
      be in agreement with the customer where applicable).
    </CustomBalancedText>

    <CustomBalancedText>
      Cattery Connect’s role is limited to updating the database as per requests
      from an owner and holds no liability for disputes.
    </CustomBalancedText>
  </ParentDiv>
);

export default BookingsAndCancellations;
