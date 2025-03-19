import useGetIndividualCustomersCatsSelectors from "../../hooks/selectors/use-get-individual-customers-cats-selectors";

import useGetCustomersCatsThunkUseEffect from "./hooks/use-get-customers-cats-thunk-use-effect";

import TitleAndLoader from "./title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Intro from "./intro.component";
import CatsMap from "./cats-map.component";

import { Container } from "../../styles/container/container.styles";

const SignedInCustomersCats = () => {
  const { individualCustomersCatsError } =
    useGetIndividualCustomersCatsSelectors();
  useGetCustomersCatsThunkUseEffect();

  return (
    <Container>
      <TitleAndLoader />

      {individualCustomersCatsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <Intro />
          <CatsMap />
        </>
      )}
    </Container>
  );
};

export default SignedInCustomersCats;
