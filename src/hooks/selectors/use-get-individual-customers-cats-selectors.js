import { useSelector } from "react-redux";

import { selectIndividualCustomersCatsSelectors } from "../../store/get-individual-customers-cats/selectors";

const useGetIndividualCustomersCatsSelectors = () => {
  const {
    individualCustomersCatsIsLoading,
    individualCustomersCats,
    individualCustomersCatsError,
  } = useSelector(selectIndividualCustomersCatsSelectors);

  return {
    individualCustomersCatsIsLoading,
    individualCustomersCats,
    individualCustomersCatsError,
  };
};

export default useGetIndividualCustomersCatsSelectors;
