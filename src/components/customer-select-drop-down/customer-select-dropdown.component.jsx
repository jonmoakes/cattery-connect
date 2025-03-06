import useDropdownLogic from "./customer-select-dropdown-hooks/use-dropdown-logic";

import CustomerSelectHelpText from "./customer-select-help-text.component";
import NoCustomersFoundInSearch from "./no-customers-found-in-search.component";

import { DropdownList, StyledInput } from "../../styles/form/form.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const CustomerSelectDropdown = ({ handleCustomerSelectChange }) => {
  const {
    searchTerm,
    setSearchTerm,
    setShowDropdown,
    filteredCustomers,
    hasFilteredCustomers,
    noFilteredCustomers,
  } = useDropdownLogic();

  return (
    <>
      <CustomerSelectHelpText />

      <StyledInput
        className="customer-search"
        type="text"
        placeholder="Search customer name / id..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {hasFilteredCustomers ? (
        <DropdownList>
          {filteredCustomers.map((customer, index) => {
            const { customerId, name } = customer;
            return (
              <div key={customerId}>
                {index === 0 && <BlackHr />}
                <li
                  key={customer.$id}
                  onClick={() => {
                    handleCustomerSelectChange(customer);
                    setSearchTerm(name);
                    setShowDropdown(false);
                  }}
                >
                  {name}
                </li>
                <BlackHr />
              </div>
            );
          })}
        </DropdownList>
      ) : (
        noFilteredCustomers && <NoCustomersFoundInSearch />
      )}
    </>
  );
};

export default CustomerSelectDropdown;
