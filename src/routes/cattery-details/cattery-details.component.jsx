import useFetchCatteryDetailsThunkUseEffect from "./hooks/use-fetch-cattery-details-thunk-use-effect";

import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";

import Metadata from "../../components/metadata/metadata.component";
import CatteryDetailsMap from "./cattery-details-map.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TitleAndLoader from "./title-and-loader.component";
import CatteryDetailsIntro from "./cattery-details-intro.component";

import { Container } from "../../styles/container/container.styles";

const CatteryDetails = () => {
  const { catteryDetailsError } = useGetCatteryDetailsSelectors();
  useFetchCatteryDetailsThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Cattery Details"
        description="View the details of your cattery, like contact details and prices."
      />
      <TitleAndLoader />

      {catteryDetailsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <CatteryDetailsIntro />
          <CatteryDetailsMap />
        </>
      )}
    </Container>
  );
};

export default CatteryDetails;
