import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetGetAllCustomersState } from "../../../store/get-all-customers/get-all-customers.slice";

const usePassIdandGoToRoute = (route, idToBePassed) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const passIdAndGoToRoute = () => {
    dispatch(resetGetAllCustomersState());
    navigate(route, {
      state: idToBePassed,
    });
  };

  return { passIdAndGoToRoute };
};

export default usePassIdandGoToRoute;
