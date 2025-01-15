import { useSelector } from "react-redux";

import { selectAddCustomerDetailsSelectors } from "../../store/add-customer/add-customer.slice";

const useGetAddCustomerDetailsSelectors = () => {
  const {
    addCustomerDetails,
    addCustomerResult,
    addCustomerError,
    addCustomerIsLoading,
  } = useSelector(selectAddCustomerDetailsSelectors);

  const { name, email, phoneNumber, address, emergencyContactDetails } =
    addCustomerDetails ?? {};

  return {
    addCustomerDetails,
    addCustomerResult,
    addCustomerError,
    addCustomerIsLoading,
    name,
    email,
    phoneNumber,
    address,
    emergencyContactDetails,
  };
};

export default useGetAddCustomerDetailsSelectors;
