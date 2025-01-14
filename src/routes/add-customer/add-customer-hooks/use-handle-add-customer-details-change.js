import { useDispatch } from "react-redux";

import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { setAddCustomerDetails } from "../../../store/add-customer/add-customer.slice";

const useHandleAddCustomerDetailsChange = () => {
  const { addCustomerDetails } = useGetAddCustomerDetailsSelectors();
  const dispatch = useDispatch();

  const handleAddCustomerDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setAddCustomerDetails({ ...addCustomerDetails, [name]: value }));
  };

  return { handleAddCustomerDetailsChange };
};

export default useHandleAddCustomerDetailsChange;
