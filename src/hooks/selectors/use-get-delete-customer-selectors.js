import { useSelector } from "react-redux";

import { selectDeleteCustomerSelectors } from "../../store/delete-customer/delete-customer.slice";

const useGetDeleteCustomerSelectors = () => {
  const { deleteCustomerResult, deleteCustomerError, deleteCustomerIsLoading } =
    useSelector(selectDeleteCustomerSelectors);

  return {
    deleteCustomerResult,
    deleteCustomerError,
    deleteCustomerIsLoading,
  };
};

export default useGetDeleteCustomerSelectors;
