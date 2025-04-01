import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import Metadata from "../../components/metadata/metadata.component";
import EditCatTitleAndLoader from "./edit-cat-title-and-loader.component";
import NoCustomerIdFound from "../../components/no-customer-id-found/no-customer-id-found.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const EditCat = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();

  const { customerId } = detailsRequiredForCatManagement ?? {};

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Edit Cat"
        description="Update the details of an existing cat in your cattery. Edit information like name, feeding instructions, and medical needs."
      />

      <EditCatTitleAndLoader />

      {!customerId ? (
        <NoCustomerIdFound />
      ) : (
        <ParentDiv>
          <CatDetailsForm />
        </ParentDiv>
      )}
    </Container>
  );
};

export default EditCat;
