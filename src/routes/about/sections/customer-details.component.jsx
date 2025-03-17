import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../styles/div/div.styles";

import { customersAboutPageImage } from "../../../strings/image-urls";

const CustomerDetails = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h2">
        Managing Customer Details:
      </CustomBalancedText>

      <CustomBalancedText>
        Catteries can easily view and store customer details using the Cattery
        Connect app.
      </CustomBalancedText>
      <CustomBalancedText>
        Each customer's information is securely stored and accessible when
        needed, helping cattery owners manage bookings and keep track of
        important details.
      </CustomBalancedText>
      <CustomBalancedText>
        please note: customer data below is dummy data for the purpose of this
        about page.
      </CustomBalancedText>
      <CustomBalancedText>no real customer data is used.</CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: customersAboutPageImage,
        altText: "customers table",
        className: "no-border imac",
      }}
    />

    <ParentDiv>
      <CustomBalancedText>
        you can securely store and access the customers:
      </CustomBalancedText>
      <ul className="bullit">
        <li>Name</li>
        <li>contact number ( clickable for instant calls )</li>
        <li>email ( clickable for quick emails )</li>
        <li>address</li>
        <li>emergency contact details</li>
      </ul>
      <CustomBalancedText>
        No more manually entering email addresses or phone numbers..
      </CustomBalancedText>
      <CustomBalancedText>
        just tap and connect effortlessly!
      </CustomBalancedText>
      <CustomBalancedText>
        you can add, edit or delete customers as needed.
      </CustomBalancedText>
      <CustomBalancedText>
        deleting a customer also removes all of their cat details in one click!
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default CustomerDetails;
