import {
  careForKittiesCatteryId,
  furryFriendsRetreatCatteryId,
} from "../constants/constants";

export const getCatteryName = (catteryId) => {
  switch (catteryId) {
    case furryFriendsRetreatCatteryId:
      return "Furry Friends Retreat";
    case careForKittiesCatteryId:
      return "Care 4 Kitties";
    default:
      "Your Cattery";
  }
};
