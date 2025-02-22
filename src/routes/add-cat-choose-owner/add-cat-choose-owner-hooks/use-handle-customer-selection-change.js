import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import { setDetailsRequiredForCatManagement } from "../../../store/cat-details-management/cat-details-management.slice";

const useHandleCustomerSelectionChange = () => {
  const { allCustomers } = useGetAllCustomerSelectors();

  const [selectedCustomer, setSelectedCustomer] = useState("");

  const dispatch = useDispatch();

  const handleCustomerSelectionChange = (e) => {
    const selectedCustomerName = e.target.value;
    const selectedCustomer = allCustomers.find(
      (customer) => customer.name === selectedCustomerName
    );
    setSelectedCustomer(selectedCustomer);
    dispatch(
      setDetailsRequiredForCatManagement({
        customerId: selectedCustomer.customerId,
        customerName: selectedCustomer.name,
      })
    );
  };

  return { handleCustomerSelectionChange, selectedCustomer };
};

export default useHandleCustomerSelectionChange;
