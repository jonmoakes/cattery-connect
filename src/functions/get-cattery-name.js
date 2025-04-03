import { furryFriendsRetreatCatteryId } from "../constants/cattery-id-constants";

export const getCatteryName = (catteryId) => {
  switch (catteryId) {
    case furryFriendsRetreatCatteryId:
      return "Furry Friends Retreat";
    default:
      "Your Cattery";
  }
};
