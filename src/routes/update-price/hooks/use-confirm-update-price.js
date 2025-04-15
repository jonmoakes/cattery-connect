import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";

import { updatePricePerNightAsync } from "../../../store/update-price/update-price-thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useConfirmUpdatePrice = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { newPricingArray } = useGetUpdatePriceSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmUpdatePrice = () => {
    const confirmResult = () => {
      dispatch(
        updatePricePerNightAsync({
          catteryId,
          newPricingArray,
        })
      );
    };

    confirmSwal(
      "are you sure you want to update your prices?",
      "by clicking 'yes, set new prices!', this declares that you have double checked your new prices.",
      "yes, set new prices!",
      "",
      confirmResult,
      null
    );
  };

  return { confirmUpdatePrice };
};

export default useConfirmUpdatePrice;
