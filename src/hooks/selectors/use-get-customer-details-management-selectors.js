import { useSelector } from "react-redux";

import { selectCustomerDetailsManagementSelectors } from "../../store/customer-details-management/customer-details-management.slice";

const useGetCustomerDetailsManagementSelectors = () => {
  const {
    customerDetails,
    customerDetailsManagementIsLoading,
    addCustomerResult,
    addCustomerError,
    editCustomerResult,
    editCustomerError,
    deleteCustomerResult,
    deleteCustomerError,
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
    customerDetailsManagementIsLoading,
    addCustomerResult,
    addCustomerError,
    editCustomerResult,
    editCustomerError,
    deleteCustomerResult,
    deleteCustomerError,
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
