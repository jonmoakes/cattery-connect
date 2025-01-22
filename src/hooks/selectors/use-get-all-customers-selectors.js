import { useSelector } from "react-redux";

import { selectGetAllCustomersSelectors } from "../../store/get-all-customers/get-all-customers.slice";

const useGetAllCustomerSelectors = () => {
  const { getAllCustomersIsLoading, allCustomers, getAllCustomersError } =
    useSelector(selectGetAllCustomersSelectors);

  return {
    getAllCustomersIsLoading,
    allCustomers,
    getAllCustomersError,
  };
};

export default useGetAllCustomerSelectors;
