import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";
import Metadata from "../../components/metadata/metadata.component";
import AddCatTitleAndLoader from "./add-cat-title-and-loader.component";
import NoCustomerIdFound from "../../components/no-customer-id-found/no-customer-id-found.component";
import AddCatInstructions from "./add-cat-instructions.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AddCat = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();

  const { customerId } = detailsRequiredForCatManagement ?? {};

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Add Cat"
        description="Register a new cat in Cattery Connect. Store important details like name, feeding info, and medical needs."
      />
      <AddCatTitleAndLoader />

      {!customerId ? (
        <NoCustomerIdFound />
      ) : (
        <ParentDiv>
          <AddCatInstructions />
          <CatDetailsForm />
        </ParentDiv>
      )}
    </Container>
  );
};

export default AddCat;
