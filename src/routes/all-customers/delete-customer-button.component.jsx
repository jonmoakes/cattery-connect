import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../hooks/selectors/use-get-data-to-be-passed-selectors";
import { deleteCustomerAsync } from "../../store/customer-details-management/customer-details-management.thunks";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { confirmDeleteMessage } from "../../strings/confirms";

const DeleteCustomerButton = () => {
  const { customerToEditDetails } = useGetDataToBePassedSelectors();

  const { $id, name } = customerToEditDetails ?? {};

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
