import { useSelector } from "react-redux";

import { selectCustomerDetailsSelectors } from "../../store/customer/customer.slice";

const useGetCustomerDetailsSelectors = () => {
  const { customerDetails } = useSelector(selectCustomerDetailsSelectors);

  const { name, email, phoneNumber, address, emergencyContactDetails } =
    customerDetails;

  return {
    customerDetails,
    name,
    email,
    phoneNumber,
    address,
    emergencyContactDetails,
  };
};

export default useGetCustomerDetailsSelectors;
