import { useSelector } from "react-redux";

import { selectCustomerDetailsManagementSelectors } from "../../store/customer-details-management/selectors";

const useGetCustomerDetailsManagementSelectors = () => {
  const {
    customerDetails,
    customerDetailsForFormComparison,
    customerDetailsManagementIsLoading,
    addCustomerResult,
    addCustomerError,
    editCustomerResult,
    editCustomerError,
    deleteCustomerResult,
    deleteCustomerError,
    deleteCustomersCatsIsLoading,
    deleteCustomersCatsResult,
    deleteCustomersCatsError,
  } = useSelector(selectCustomerDetailsManagementSelectors);

  const {
    $id,
    name,
    phoneNumber,
    address,
    emergencyContactDetails,
    customerId,
    email,
    catteryId,
    catDetails,
  } = customerDetails ?? {};

  return {
    customerDetails,
    customerDetailsForFormComparison,
    customerDetailsManagementIsLoading,
    addCustomerResult,
    addCustomerError,
    editCustomerResult,
    editCustomerError,
    deleteCustomerResult,
    deleteCustomerError,
    deleteCustomersCatsIsLoading,
    deleteCustomersCatsResult,
    deleteCustomersCatsError,
    $id,
    name,
    phoneNumber,
    address,
    emergencyContactDetails,
    customerId,
    email,
    catteryId,
    catDetails,
  };
};

export default useGetCustomerDetailsManagementSelectors;
