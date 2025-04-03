import { useEffect } from "react";

import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";

import usePriceUpdatedSuccessSwal from "./use-price-updated-success-swal";
import usePriceUpdatedErrorSwal from "./use-price-updated-error-swal";

const useGetUpdatePriceResultSwalUseEffect = () => {
  const { updatePriceResult, updatePriceError } = useGetUpdatePriceSelectors();
  const { priceUpdatedSuccessSwal } = usePriceUpdatedSuccessSwal();
  const { priceUpdatedErrorSwal } = usePriceUpdatedErrorSwal();

  useEffect(() => {
    if (!updatePriceResult && !updatePriceError) return;

    if (updatePriceResult === "fulfilled") {
      priceUpdatedSuccessSwal();
    } else if (updatePriceResult === "rejected") {
      priceUpdatedErrorSwal(updatePriceError);
    }
  }, [
    updatePriceResult,
    updatePriceError,
    priceUpdatedSuccessSwal,
    priceUpdatedErrorSwal,
  ]);
};

export default useGetUpdatePriceResultSwalUseEffect;
