import { useDispatch } from "react-redux";
import { updatePricePerNightAsync } from "../../../store/update-price/update-price-thunks";
import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmUpdatePriceMessage } from "../../../strings/confirms";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

const useConfirmUpdatePrice = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { newPrice } = useGetUpdatePriceSelectors();
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmUpdatePrice = () => {
    const confirmResult = () => {
      dispatch(
        updatePricePerNightAsync({
          catteryId,
          newPrice,
        })
      );
    };

    confirmSwal(
      confirmUpdatePriceMessage(newPrice),
      "",
      "yes, set new price!",
      "",
      confirmResult,
      null
    );
  };

  return { confirmUpdatePrice };
};

export default useConfirmUpdatePrice;
