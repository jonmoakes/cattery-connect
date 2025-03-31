import { useDispatch } from "react-redux";

import useGetMoveCustomerToNewCatterySelectors from "../../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import { checkCustomerCanBeMovedAsync } from "../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-thunks";

const useCheckCustomerCanBeMoved = () => {
  const { customerId } = useGetMoveCustomerToNewCatterySelectors();

  const dispatch = useDispatch();

  // checks chosen customers bookings for incomplete paymentStatuses
  const checkCustomerCanBeMoved = (e) => {
    e.preventDefault();
    dispatch(checkCustomerCanBeMovedAsync({ customerId }));
  };

  return { checkCustomerCanBeMoved };
};

export default useCheckCustomerCanBeMoved;
