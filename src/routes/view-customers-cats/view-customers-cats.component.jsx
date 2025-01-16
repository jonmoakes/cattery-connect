import { useLocation } from "react-router-dom";

import TitleAndAddCatLink from "./title-and-add-cat-link.component";
import ViewCustomersCatsTable from "./view-customers-cats-table.component";

import { Container } from "../../styles/container/container.styles";

const ViewCustomersCats = () => {
  const { state: customersIdNameAndCatDetails } = useLocation();

  const { customerDocumentId, customerName, catDetails } =
    customersIdNameAndCatDetails ?? {};
  const cats = catDetails ? JSON.parse(catDetails) : "";

  return (
    <Container>
      <TitleAndAddCatLink
        {...{ customerName, customerDocumentId, catDetails }}
      />
      <ViewCustomersCatsTable {...{ cats, customerDocumentId, customerName }} />
    </Container>
  );
};

export default ViewCustomersCats;
