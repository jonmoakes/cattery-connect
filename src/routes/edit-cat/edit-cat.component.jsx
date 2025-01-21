import EditCatTitleAndLoader from "./edit-cat-title-and-loader.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const EditCat = () => (
  <Container>
    <EditCatTitleAndLoader />

    <ParentDiv>
      <CatDetailsForm />
    </ParentDiv>
  </Container>
);

export default EditCat;
