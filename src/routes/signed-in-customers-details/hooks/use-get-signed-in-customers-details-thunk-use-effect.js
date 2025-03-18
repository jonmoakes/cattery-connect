import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { getSignedInCustomersDetailsAsync } from "../../../store/signed-in-customers-details/signed-in-customer-details.thunks";

const useGetSignedInCustomersDetailsThunkUseEffect = () => {
  const { id } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;
    dispatch(getSignedInCustomersDetailsAsync({ id }));
  }, [id, dispatch]);
};

export default useGetSignedInCustomersDetailsThunkUseEffect;
