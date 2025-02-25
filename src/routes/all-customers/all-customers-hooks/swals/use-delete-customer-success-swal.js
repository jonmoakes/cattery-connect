import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetCustomerDetailsManagementState } from "../../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useDeleteCustomerSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const deleteCustomerSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      "the customer & their cats ( if applicable ) were deleted!",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCustomerDetailsManagementState());
      }
    });
  }, [fireSwal, dispatch]);

  return { deleteCustomerSuccessSwal };
};

export default useDeleteCustomerSuccessSwal;
