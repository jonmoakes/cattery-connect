import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetGetAllCustomersState } from "../../../store/get-all-customers/get-all-customers.slice";

const usePassCusIdandGoToAddCatRoute = (route, customerId) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const passCusIdandGoToAddCatRoute = () => {
    dispatch(resetGetAllCustomersState());
    navigate(route, {
      state: customerId,
    });
  };

  return { passCusIdandGoToAddCatRoute };
};

export default usePassCusIdandGoToAddCatRoute;
