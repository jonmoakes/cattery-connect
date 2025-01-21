import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";
import { deleteCustomerAsync } from "../../store/customer-details-management/customer-details-management.thunks";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { confirmDeleteMessage } from "../../strings/confirms";

const DeleteCustomerButton = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();

  const { $id, name } = customerDetails ?? {};

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const deleteCustomer = () => {
    confirmSwal(
      confirmDeleteMessage(name),
      "",
      "yes, delete",
      "don't delete",
      () => dispatch(deleteCustomerAsync({ $id })),
      null
    );
  };

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
