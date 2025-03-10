import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const InformationCollection = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">types of data we collect:</CustomBalancedText>

    <CustomBalancedText>
      When you register for an account as an owner, we collect your name, email
      address, and phone number.
    </CustomBalancedText>

    <CustomBalancedText>
      Additionally, we collect information about your cattery, including its
      name, address, phone number, email, website URL (if applicable), price per
      night, and the number of pens available.
    </CustomBalancedText>

    <CustomBalancedText>
      Owners create customer and cat profiles in order to manage bookings and
      ensure the proper care of the animals.
    </CustomBalancedText>

    <CustomBalancedText>
      To create a customer profile, owners must provide:
    </CustomBalancedText>

    <ul className="bullit">
      <li>The customer's name</li>
      <li>Email address (if applicable)</li>
      <li>Email address (if applicable) </li>
      <li>
        Phone number Emergency contact details ( including the name, phone
        number, and email of a designated contact )
      </li>
    </ul>

    <CustomBalancedText>
      to create a cat profile, owners must provide:
    </CustomBalancedText>

    <ul className="bullit">
      <li>The cat’s name</li>
      <li>owner’s name</li>
      <li>Vaccination status</li>
      <li>Feeding information</li>
    </ul>

    <CustomBalancedText>and if applicable:</CustomBalancedText>
    <ul className="bullit">
      <li>age</li>
      <li>gender</li>
      <li>medical information</li>
      <li>breed</li>
    </ul>

    <CustomBalancedText>
      All data entered into the system is provided by the customer themselves.
    </CustomBalancedText>

    <CustomBalancedText>
      The only other way customer or cat information can be added is if an
      administrator manually creates an entry. This is done only with the
      express permission of the owner and in accordance with the customer's
      consent.
    </CustomBalancedText>

    <CustomBalancedText>
      We also store booking-related details, including:
    </CustomBalancedText>

    <ul className="bullit">
      <li>Check-in and check-out dates and time slots</li>
      <li>Cat details for each booking</li>
      <li>Payment status of the booking</li>
    </ul>

    <CustomBalancedText>
      This information is stored to provide owners with quick access to
      essential data, ensuring the safety and well-being of cats in the cattery.
    </CustomBalancedText>
  </ParentDiv>
);

export default InformationCollection;
