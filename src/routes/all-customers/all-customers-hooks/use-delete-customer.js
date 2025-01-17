import { useDispatch } from "react-redux";

import { deleteCustomerFromDbAsync } from "../../../store/delete-customer/delete-customer.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmDeleteCustomerMessage } from "../../../strings/confirms";

const useDeleteCustomer = () => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const deleteCustomer = (name, documentId) => {
    confirmSwal(
      confirmDeleteCustomerMessage(name),
      "",
      "yes, delete",
      "don't delete",
      () => dispatch(deleteCustomerFromDbAsync({ documentId })),
      null
    );
  };

  return { deleteCustomer };
};

export default useDeleteCustomer;
