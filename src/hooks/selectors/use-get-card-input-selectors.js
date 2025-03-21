import { useSelector } from "react-redux";

import { selectCardInputSelectors } from "../../store/card-input/selectors";

const useGetCardInputSelectors = () => {
  const { showPaymentForm, cardInputResult } = useSelector(
    selectCardInputSelectors
  );

  const { error, warning, showConfirmButton } = cardInputResult ?? {};

  return {
    showPaymentForm,
    error,
    warning,
    showConfirmButton,
  };
};

export default useGetCardInputSelectors;
