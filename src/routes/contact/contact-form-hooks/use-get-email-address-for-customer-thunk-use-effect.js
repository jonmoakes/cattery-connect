import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { getCatteryEmailAsync } from "../../../store/send-email/send-email.thunks";

const useGetEmailAddressForCustomerThunkUseEffect = () => {
  const { role, catteryId } = useGetCurrentUserSelectors();
  const { getCatteryEmailResult } = useGetSendEmailSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!role || role !== "customer" || getCatteryEmailResult) return;

    dispatch(getCatteryEmailAsync({ catteryId }));
  }, [role, dispatch, catteryId, getCatteryEmailResult]);
};

export default useGetEmailAddressForCustomerThunkUseEffect;
