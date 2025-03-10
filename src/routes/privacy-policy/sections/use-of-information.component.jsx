import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const UseOfInformation = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">how we use your data:</CustomBalancedText>
    <CustomBalancedText>we use your data to:</CustomBalancedText>

    <ul className="bullit">
      <li> Create and manage bookings for your cattery.</li>
      <li>
        Add, update, or delete customer and cat information, and manage user
        accounts.
      </li>
      <li>
        Send notifications and updates related to your bookings and account.
      </li>
      <li>Enhance the functionality and user experience of the app.</li>
      <li>
        Manage dietary and medical requirements to ensure the safety and
        well-being of cats.
      </li>
    </ul>
  </ParentDiv>
);

export default UseOfInformation;
