import AddCatTitleAndLoader from "./add-cat-title-and-loader.component";
import AddCatInstructions from "./add-cat-instructions.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";
import NoCustomerIdFound from "../../components/no-customer-id-found/no-customer-id-found.component";

const AddCat = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();

  const { customerId } = detailsRequiredForCatManagement ?? {};

  return (
    <Container>
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
