import useGetIndividualCustomersCatsSelectors from "../../hooks/selectors/use-get-individual-customers-cats-selectors";

import useGetCustomersCatsThunkUseEffect from "./hooks/use-get-customers-cats-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
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
      <Metadata
        title="Cattery Connect - Your Cats"
        description="View the details we hold of your cats for their safe management."
      />
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
