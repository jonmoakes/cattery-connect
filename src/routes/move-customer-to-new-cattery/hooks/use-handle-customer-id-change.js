import { useDispatch } from "react-redux";

import { setCustomerId } from "../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-slice";

const useHandleCustomerIdChange = () => {
  const dispatch = useDispatch();

  const handleCustomerIdChange = (event) => {
    dispatch(setCustomerId(event.target.value));
  };

  return { handleCustomerIdChange };
};

export default useHandleCustomerIdChange;
