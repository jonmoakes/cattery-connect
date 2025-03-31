import { useDispatch } from "react-redux";

import { setNewCatteryId } from "../../../store/move-customer-to-new-cattery/move-customer-to-new-cattery-slice";

const useHandleNewCatteryIdChange = () => {
  const dispatch = useDispatch();

  const handleNewCatteryIdChange = (event) => {
    dispatch(setNewCatteryId(event.target.value));
  };

  return { handleNewCatteryIdChange };
};

export default useHandleNewCatteryIdChange;
