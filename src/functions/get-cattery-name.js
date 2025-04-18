import { twfFarmCatteryId } from "../constants/cattery-id-constants";

export const getCatteryName = (catteryId) => {
  switch (catteryId) {
    case twfFarmCatteryId:
      return "TWF Cattery";
    default:
      "Your Cattery";
  }
};
