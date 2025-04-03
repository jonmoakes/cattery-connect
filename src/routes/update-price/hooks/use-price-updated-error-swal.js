import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  resetUpdatePriceError,
  resetUpdatePriceResult,
} from "../../../store/update-price/update-price-slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import { errorReceivedMessage } from "../../../strings/errors";

const usePriceUpdatedErrorSwal = () => {
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const priceUpdatedErrorSwal = useCallback(
    (updatePriceError) => {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error updating the price.",
          updatePriceError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdatePriceResult());
          dispatch(resetUpdatePriceError());
        }
      });
    },
    [fireSwal, dispatch]
  );

  return { priceUpdatedErrorSwal };
};

export default usePriceUpdatedErrorSwal;
