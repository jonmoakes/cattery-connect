import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";
import { deleteCustomerAsync } from "../../../store/customer-details-management/customer-details-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmDeleteMessage } from "../../../strings/confirms";

const useDeleteCustomer = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();

  const { $id, name } = dataToBePassed ?? {};

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

  return { deleteCustomer };
};

export default useDeleteCustomer;
