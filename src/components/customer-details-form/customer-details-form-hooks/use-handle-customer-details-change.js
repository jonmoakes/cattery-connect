import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { setCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";

const useHandleCustomerDetailsChange = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();
  const dispatch = useDispatch();

  const handleCustomerDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setCustomerDetails({ ...customerDetails, [name]: value }));
  };

  return { handleCustomerDetailsChange };
};

export default useHandleCustomerDetailsChange;
