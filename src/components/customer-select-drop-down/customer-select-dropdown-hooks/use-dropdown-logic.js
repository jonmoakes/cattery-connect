import { useState } from "react";

import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

const useDropdownLogic = () => {
  const { allCustomers } = useGetAllCustomerSelectors();

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCustomers = allCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.customerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasAtLeastOneCustomer = allCustomers && allCustomers.length > 0;
  const hasFilteredCustomers = showDropdown && filteredCustomers.length > 0;
  const noFilteredCustomers = showDropdown && filteredCustomers.length === 0;

  return {
    searchTerm,
    setSearchTerm,
    setShowDropdown,
    filteredCustomers,
    hasFilteredCustomers,
    noFilteredCustomers,
    hasAtLeastOneCustomer,
  };
};

export default useDropdownLogic;
