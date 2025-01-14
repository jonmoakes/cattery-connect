import { useSelector } from "react-redux";

import { selectGetAllCustomersSelectors } from "../../store/get-all-customers/get-all-customers.slice";

const useGetAddCustomerDetailsSelectors = () => {
  const { getAllCustomersIsLoading, allCustomers, getAllCustomersError } =
    useSelector(selectGetAllCustomersSelectors);

  return {
    getAllCustomersIsLoading,
    allCustomers,
    getAllCustomersError,
  };
};

export default useGetAddCustomerDetailsSelectors;
