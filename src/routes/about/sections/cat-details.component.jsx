import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../styles/div/div.styles";

import { BlackHr } from "../../../styles/hr/hr.styles";
import { catsAboutPageImage } from "../../../strings/image-urls";

const CatDetails = () => (
  <>
    <BlackHr />
    <ParentDiv>
      <CustomBalancedText type="h2">Managing Cat Details:</CustomBalancedText>

      <CustomBalancedText>
        Cattery owners can easily view and manage cat details using the Cattery
        Connect app.
      </CustomBalancedText>
      <CustomBalancedText>
        Each cat’s information is securely stored and readily accessible,
        helping you stay organised and provide the best care.
      </CustomBalancedText>

      <CustomBalancedText>
        please note: cat data below is dummy data for the purpose of this about
        page.
      </CustomBalancedText>
      <CustomBalancedText>no real cat data is used.</CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: catsAboutPageImage,
        altText: "cats table",
        className: "no-border imac",
      }}
    />

    <ParentDiv>
      <CustomBalancedText>
        You can securely store and update each cat’s:
      </CustomBalancedText>
      <ul className="bullit">
        <li>name</li>
        <li>vaccination status</li>
        <li>feeding details</li>
        <li>breed</li>
        <li>age</li>
        <li>medical info</li>
        <li>behaviour info</li>
      </ul>

      <CustomBalancedText>
        Each cat is linked to its owner by an ID, allowing you to quickly access
        customer details at the tap of a button whenever needed!
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default CatDetails;
