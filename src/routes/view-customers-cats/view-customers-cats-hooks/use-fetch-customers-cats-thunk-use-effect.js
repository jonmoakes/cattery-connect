import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import { fetchIndividualCustomersCatsAsync } from "../../../store/get-individual-customers-cats/get-individual-customers-cats.thunks";

const useFetchCustomersCatsThunkUseEffect = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();

  const { customerId } = detailsRequiredForCatManagement ?? "";
  const dispatch = useDispatch();

  useEffect(() => {
    if (!customerId) return;
    dispatch(fetchIndividualCustomersCatsAsync({ customerId }));
  }, [dispatch, customerId]);
};

export default useFetchCustomersCatsThunkUseEffect;
