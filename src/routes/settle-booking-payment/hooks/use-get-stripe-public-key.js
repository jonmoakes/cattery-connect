import { useCallback } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import {
  furryFriendsRetreatCatteryId,
  furryFriendsRetreatStripePublishableKey,
} from "../../../constants/constants";

const useGetStripePublicKey = () => {
  const { catteryId } = useGetCurrentUserSelectors();

  const getStripePublicKey = useCallback(() => {
    switch (catteryId) {
      case furryFriendsRetreatCatteryId:
        return furryFriendsRetreatStripePublishableKey;
      default:
        return null;
    }
  }, [catteryId]);

  return { getStripePublicKey };
};

export default useGetStripePublicKey;
