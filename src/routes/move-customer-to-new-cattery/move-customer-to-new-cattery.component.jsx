import useGetMoveCustomerToNewCatterySelectors from "../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import useUpdateCustomerCatteryIdResultSwalUseEffect from "./hooks/use-effects/use-update-customer-cattery-id-result-swal-use-effect";
import useUpdateCustomersCatsCatteryIdsResultSwalUseEffect from "./hooks/use-effects/use-update-customers-cats-cattery-ids-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import TitleAndLoader from "./title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import Intro from "./intro.component";
import ChooseCustomerId from "./choose-customer-id.component";
import MissingOrCustomerCantBeMovedInfo from "./missing-or-customer-cant-be-moved-info.component";
import UpdateCustomersCatteryId from "./update-customers-cattery-id.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const MoveCustomerToNewCattery = () => {
  const { checkCustomerCanBeMovedError } =
    useGetMoveCustomerToNewCatterySelectors();

  useUpdateCustomerCatteryIdResultSwalUseEffect();
  useUpdateCustomersCatsCatteryIdsResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Move Customer To A New Cattery."
        description="Update a customers cattery ID so future payments go to a new cattery."
      />
      <TitleAndLoader />

      {checkCustomerCanBeMovedError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <Intro />

          <ParentDiv>
            <ChooseCustomerId />
            <MissingOrCustomerCantBeMovedInfo />
          </ParentDiv>

          <UpdateCustomersCatteryId />
        </>
      )}
    </Container>
  );
};

export default MoveCustomerToNewCattery;
