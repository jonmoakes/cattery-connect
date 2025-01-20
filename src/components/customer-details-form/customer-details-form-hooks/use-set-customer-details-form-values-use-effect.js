import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";

import { setCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";

const useSetCustomerDetailsFormValuesUseEffect = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!Object.keys(dataToBePassed).length) return;

    dispatch(setCustomerDetails(dataToBePassed));
  }, [dataToBePassed, dispatch]);
};

export default useSetCustomerDetailsFormValuesUseEffect;
