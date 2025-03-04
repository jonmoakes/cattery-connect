import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import useHandleAddCatChooseOwnerRouteCustomerSelect from "./use-handle-add-cat-choose-owner-route-customer-select";
import useHandleAddBookingRouteCustomerSelect from "./use-handle-add-booking-route-customer-select";

import {
  addBookingRoute,
  addCatChooseOwnerRoute,
} from "../../../strings/routes";

const useHandleCustomerSelectChange = () => {
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const { handleAddCatChooseOwnerRouteCustomerSelect } =
    useHandleAddCatChooseOwnerRouteCustomerSelect();
  const { handleAddBookingRouteCustomerSelect } =
    useHandleAddBookingRouteCustomerSelect();

  const location = useLocation();
  const path = location.pathname;

  const handleCustomerSelectChange = useCallback(
    (customer) => {
      if (!customer) return;
      if (path === addCatChooseOwnerRoute) {
        setSelectedCustomerName(customer.name);
        handleAddCatChooseOwnerRouteCustomerSelect(customer);
      } else if (path === addBookingRoute) {
        handleAddBookingRouteCustomerSelect(customer);
      }
    },
    [
      handleAddCatChooseOwnerRouteCustomerSelect,
      handleAddBookingRouteCustomerSelect,
      path,
    ]
  );

  return { handleCustomerSelectChange, selectedCustomerName };
};

export default useHandleCustomerSelectChange;
