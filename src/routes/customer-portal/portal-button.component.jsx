import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { Button } from "../../styles/button/button.styles";

import { furryFriendsRetreatCatteryId } from "../../constants/cattery-id-constants";
import {
  customerPortalLink,
  testCatteryCustomerPortalLink,
} from "../../constants/stripe-constants";

const PortalButton = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const portalLink =
    catteryId === furryFriendsRetreatCatteryId
      ? testCatteryCustomerPortalLink
      : customerPortalLink;

  return (
    <>
      <a href={portalLink} target="_blank" rel="noreferrer">
        <Button className="teal">launch portal</Button>
      </a>
    </>
  );
};

export default PortalButton;
