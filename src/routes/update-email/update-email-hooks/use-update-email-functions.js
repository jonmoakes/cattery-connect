import { useDispatch } from "react-redux";
import { setUpdateEmailDetails } from "../../../store/update-email/update-email.slice";
import useGetUpdateEmailSelectors from "../../../hooks/selectors/use-get-update-email-selectors";

const useUpdateEmailFunctions = () => {
  const { updateEmailDetails } = useGetUpdateEmailSelectors();

  const dispatch = useDispatch();

  const dispatchHandleUpdateEmailDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setUpdateEmailDetails({ ...updateEmailDetails, [name]: value }));
  };

  return { dispatchHandleUpdateEmailDetailsChange };
};

export default useUpdateEmailFunctions;
