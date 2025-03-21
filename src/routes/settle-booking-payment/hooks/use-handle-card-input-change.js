import { useDispatch } from "react-redux";

import { setCardInputResult } from "../../../store/card-input/card-input.slice";

const useHandleCardInputChange = () => {
  const dispatch = useDispatch();

  const handleCardInputChange = (e) => {
    if (!e.empty && e.error === undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: "please continue entering in your details",
          showConfirmButton: false,
        })
      );
    } else if (e.error !== undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: e.error.message,
          warning: "",
          showConfirmButton: false,
        })
      );
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: "",
          showConfirmButton: true,
        })
      );
    }
  };

  return { handleCardInputChange };
};

export default useHandleCardInputChange;
