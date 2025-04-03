import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { noStripePublicKeyFoundMessage } from "../../../strings/errors";
import { signedInCustomersBookingsRoute } from "../../../strings/routes";
import { getPublishableKey } from "../../../functions/get-publishable-key";

const useGetStripePublicKeyUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const [stripePromise, setStripePromise] = useState(null);
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const publicKey = getPublishableKey(catteryId);

  useEffect(() => {
    if (stripePromise !== null) return;

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
  }, [catteryId, fireSwal, stripePromise, hamburgerHandlerNavigate, publicKey]);

  return { stripePromise };
};

export default useGetStripePublicKeyUseEffect;
