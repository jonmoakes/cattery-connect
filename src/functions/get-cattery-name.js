import { tittesworthFarmCatteryId } from "../constants/cattery-id-constants";

export const getCatteryName = (catteryId) => {
  switch (catteryId) {
    case tittesworthFarmCatteryId:
      return "Tittesworth Farm Cattery";
    default:
      "Your Cattery";
  }
};
