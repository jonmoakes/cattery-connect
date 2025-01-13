import { useDispatch } from "react-redux";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import { setCustomerDetails } from "../../../store/customer/customer.slice";

const useHandleAddCustomerDetailsChange = () => {
  const { customerDetails } = useGetCustomerDetailsSelectors();
  const dispatch = useDispatch();

  const handleAddCustomerDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setCustomerDetails({ ...customerDetails, [name]: value }));
  };

  return { handleAddCustomerDetailsChange };
};

export default useHandleAddCustomerDetailsChange;
