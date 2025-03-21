import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import useGetStripePublicKey from "./use-get-stripe-public-key";
import useFireSwal from "../../../hooks/use-fire-swal";

const useGetStripePublicKeyUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const [stripePromise, setStripePromise] = useState(null);
  const { getStripePublicKey } = useGetStripePublicKey();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (stripePromise !== null) return;
    const publicKey = getStripePublicKey(catteryId);

    if (publicKey) {
      setStripePromise(loadStripe(publicKey));
    } else {
      fireSwal(
        "error",
        "no stripe public key found for this cattery.",
        "please contact your cattery for assistance",
        0,
        "",
        false,
        "",
        false
      );
    }
  }, [catteryId, getStripePublicKey, fireSwal, stripePromise]);

  return { stripePromise };
};

export default useGetStripePublicKeyUseEffect;
