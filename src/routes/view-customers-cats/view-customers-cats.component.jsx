import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useFetchCustomersCatsThunkUseEffect from "./view-customers-cats-hooks/use-fetch-customers-cats-thunk-use-effect";
import useDeleteCatResultSwalUseEffect from "../../hooks/delete-cat/use-delete-cat-result-swal-use-effect";
import useViewIndividualCustomersCatsListener from "./view-customers-cats-hooks/view-individual-customers-cats-listener";

import Metadata from "../../components/metadata/metadata.component";
import ViewCustomersCatsLoader from "./view-customers-cats-loader.component";
import NoCustomerIdFound from "../../components/no-customer-id-found/no-customer-id-found.component";
import TitleAndAddCatLink from "./title-and-add-cat-link.component";
import ViewCustomersCatsTable from "./view-customers-cats-table.component";

import { Container } from "../../styles/container/container.styles";

const ViewCustomersCats = () => {
  useViewIndividualCustomersCatsListener();
  const { customerId } = useViewCustomersCatsVariables();
  useFetchCustomersCatsThunkUseEffect();
  useDeleteCatResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - View A Customers Cats"
        description="View details of all cats registered to a customer, including feeding and medical requirements and more!"
      />
      <ViewCustomersCatsLoader />
      {!customerId ? (
        <NoCustomerIdFound />
      ) : (
        <>
          <TitleAndAddCatLink />
          <ViewCustomersCatsTable />
        </>
      )}
    </Container>
  );
};

export default ViewCustomersCats;
