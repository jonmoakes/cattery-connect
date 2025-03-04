import { useDispatch } from "react-redux";
import { setDetailsRequiredForCatManagement } from "../../../store/cat-details-management/cat-details-management.slice";

const useHandleAddCatChooseOwnerRouteCustomerSelect = () => {
  const dispatch = useDispatch();

  const handleAddCatChooseOwnerRouteCustomerSelect = (customer) => {
    dispatch(
      setDetailsRequiredForCatManagement({
        customerId: customer.customerId,
        customerName: customer.name,
      })
    );
  };

  return { handleAddCatChooseOwnerRouteCustomerSelect };
};

export default useHandleAddCatChooseOwnerRouteCustomerSelect;
