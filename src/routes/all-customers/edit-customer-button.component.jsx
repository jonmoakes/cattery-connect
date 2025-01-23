import useAllCustomersFunctions from "./all-customers-hooks/use-all-customers-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";

const EditCustomerButton = ({ chosenEntry }) => {
  const { passCustomerDetailsAndGoToEditCustomer } =
    useAllCustomersFunctions(chosenEntry);

  return (
    <>
      <EntryOptionsButton
        className="edit"
        type="button"
        onClick={passCustomerDetailsAndGoToEditCustomer}
      >
        edit customer
      </EntryOptionsButton>
    </>
  );
};

export default EditCustomerButton;
