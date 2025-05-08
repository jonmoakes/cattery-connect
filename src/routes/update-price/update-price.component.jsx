import useGetCurrentPricesThunkUseEffect from "./hooks/use-get-current-prices-thunk-use-effect";
import useSetNewPriceArrayUseEffect from "./hooks/use-set-new-price-array-use-effect";
import useGetUpdatePriceResultSwalUseEffect from "./hooks/use-get-update-price-result-swal-use-effect";

import TitleAndLoader from "./title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Intro from "./intro.component";
import Instructions from "./intructions.component";
import Prices from "./prices.component";
import UpdatePriceButton from "./update-price-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";

const UpdatePrice = () => {
  const { catteryDetailsError, chargesByDay } = useGetCatteryDetailsSelectors();
  useGetCurrentPricesThunkUseEffect();
  useSetNewPriceArrayUseEffect();
  useGetUpdatePriceResultSwalUseEffect();

  const chargesBy = chargesByDay ? "day" : "night";

  return (
    <Container>
      <TitleAndLoader />

      {catteryDetailsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <Intro />

          <ParentDiv>
            <Instructions {...{ chargesBy }} />
            <Prices {...{ chargesBy }} />
            <UpdatePriceButton />
          </ParentDiv>
        </>
      )}
    </Container>
  );
};
export default UpdatePrice;
