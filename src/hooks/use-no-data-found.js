import { useLocation } from "react-router-dom";

import useGetAllCustomersSelectors from "./selectors/use-get-all-customers-selectors";

import { allCustomersRoute } from "../strings/routes";

const useNoDataFound = () => {
  const { allCustomers } = useGetAllCustomersSelectors();

  const location = useLocation();
  const path = location.pathname;

  const noDataFound = (data) => {
    switch (path) {
      case allCustomersRoute:
        return allCustomers !== undefined &&
          !allCustomers.length &&
          !data.length
          ? true
          : false;
      default:
        return false;
    }
  };

  // need to check for undefined because if api call is fulfilled but there is no data, the data will be undefined as opposed to being null if there is an error when firing the thunk.
  const allUsersIsUndefined = allCustomers === undefined ? true : false;

  return {
    noDataFound,
    allUsersIsUndefined,
  };
};

export default useNoDataFound;
