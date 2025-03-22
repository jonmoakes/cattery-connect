import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import useGetStripePublicKey from "./use-get-stripe-public-key";
import useFireSwal from "../../../hooks/use-fire-swal";

import { noStripePublicKeyFoundMessage } from "../../../strings/errors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { signedInCustomersBookingsRoute } from "../../../strings/routes";

const useGetStripePublicKeyUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const [stripePromise, setStripePromise] = useState(null);
  const { getStripePublicKey } = useGetStripePublicKey();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (stripePromise !== null) return;
    const publicKey = getStripePublicKey(catteryId);

    if (publicKey) {
      setStripePromise(loadStripe(publicKey));
    } else {
      fireSwal(
        "error",
        noStripePublicKeyFoundMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
        }
      });
    }
  }, [
    catteryId,
    getStripePublicKey,
    fireSwal,
    stripePromise,
    hamburgerHandlerNavigate,
  ]);

  return { stripePromise };
};

export default useGetStripePublicKeyUseEffect;
