import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchIndividualCustomersCatsAsync } from "../../../store/get-individual-customers-cats/get-individual-customers-cats.thunks";

const useGetCustomersCatsThunkUseEffect = () => {
  const { customerId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!customerId) return;
    dispatch(fetchIndividualCustomersCatsAsync({ customerId }));
  }, [dispatch, customerId]);
};

export default useGetCustomersCatsThunkUseEffect;
