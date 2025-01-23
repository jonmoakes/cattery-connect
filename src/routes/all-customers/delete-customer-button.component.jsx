import useAllCustomersFunctions from "./all-customers-hooks/use-all-customers-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";

const DeleteCustomerButton = ({ chosenEntry }) => {
  const { deleteCustomer } = useAllCustomersFunctions(chosenEntry);

  return (
    <EntryOptionsButton
      className="delete"
      type="button"
      onClick={deleteCustomer}
    >
      delete customer
    </EntryOptionsButton>
  );
};

export default DeleteCustomerButton;
