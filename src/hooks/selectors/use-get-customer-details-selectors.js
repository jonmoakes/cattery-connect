import { useSelector } from "react-redux";

import { selectCustomerDetailsSelectors } from "../../store/customer/customer.slice";

const useGetCustomerDetailsSelectors = () => {
  const { customerDetails, customerResult, customerError, customerIsLoading } =
    useSelector(selectCustomerDetailsSelectors);

  const { name, email, phoneNumber, address, emergencyContactDetails } =
    customerDetails;

  return {
    customerResult,
    customerError,
    customerIsLoading,
    customerDetails,
    name,
    email,
    phoneNumber,
    address,
    emergencyContactDetails,
  };
};

export default useGetCustomerDetailsSelectors;
