import { useSelector } from "react-redux";

import { selectGetAllCustomersSelectors } from "../../store/get-all-customers/get-all-customers.slice";

const useGetAllCustomerSelectors = () => {
  const { getAllCustomersIsLoading, allCustomers, getAllCustomersError } =
    useSelector(selectGetAllCustomersSelectors);

  const atLeastOneCustomerExists = allCustomers && allCustomers.length > 0;

  return {
    getAllCustomersIsLoading,
    allCustomers,
    getAllCustomersError,
    atLeastOneCustomerExists,
  };
};

export default useGetAllCustomerSelectors;
