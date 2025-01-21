import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";

import { setCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";
import { resetCustomerToEditDetails } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

const useSetCustomerDetailsFormValuesUseEffect = () => {
  const { customerToEditDetails } = useGetDataToBePassedSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(customerToEditDetails).length) return;

    dispatch(setCustomerDetails(customerToEditDetails));
    dispatch(resetCustomerToEditDetails());
  }, [customerToEditDetails, dispatch]);
};

export default useSetCustomerDetailsFormValuesUseEffect;
