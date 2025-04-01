import { Elements } from "@stripe/react-stripe-js";

import useGetSignedInCustomersBookingsSelectors from "../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";
import useGetCardInputSelectors from "../../hooks/selectors/use-get-card-input-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";

import useGetStripePublicKeyUseEffect from "./hooks/use-get-stripe-public-key-use-effect";
import useWaitForPaymentStatusResultUseEffect from "./hooks/use-wait-for-payment-status-result-use-effect";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TitleAndLoader from "./title-and-loader.component";
import NoBookingInfoFound from "./no-booking-info-found.component";
import InfoOfBookingToSettle from "./info-of-booking-to-settle.component";
import ShowPaymentInputButton from "./show-payment-input-button.component";
import CardInput from "./card-input.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import Metadata from "../../components/metadata/metadata.component";

const SettleBookingPayment = () => {
  const { hasBookingDetails, totalCost } =
    useGetSignedInCustomersBookingsSelectors();
  const { showPaymentForm } = useGetCardInputSelectors();
  const { paymentError } = useGetHandlePaymentSelectors();

  useGetStripePublicKeyUseEffect();
  const { stripePromise } = useGetStripePublicKeyUseEffect();
  useWaitForPaymentStatusResultUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Settle Payment"
        description="Securely pay online for your cats stay direct to your cattery."
      />
      <TitleAndLoader />

      {!stripePromise ? null : paymentError ? (
        <ShowFetchErrors />
      ) : !hasBookingDetails ? (
        <NoBookingInfoFound />
      ) : (
        <>
          <InfoOfBookingToSettle />

          <ParentDiv>
            <ShowPaymentInputButton />

            {showPaymentForm ? (
              <Elements stripe={stripePromise}>
                <CardInput {...{ totalCost }} />
              </Elements>
            ) : null}
          </ParentDiv>
        </>
      )}
    </Container>
  );
};

export default SettleBookingPayment;
