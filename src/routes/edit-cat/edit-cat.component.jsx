import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import EditCatTitleAndLoader from "./edit-cat-title-and-loader.component";
import NoCustomerIdFound from "../../components/no-customer-id-found/no-customer-id-found.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { useLocation } from "react-router-dom";
import { allCatsRoute } from "../../strings/routes";

const EditCat = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();
  const location = useLocation();
  const fromRoute = location.state?.fromRoute;

  const { customerId } = detailsRequiredForCatManagement ?? {};

  return (
    <Container>
      <EditCatTitleAndLoader />

      {fromRoute !== allCatsRoute && !customerId ? (
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
