import { useLocation } from "react-router-dom";

import AddCatTitleAndLoader from "./add-cat-title-and-loader.component";
import AddCatInstructions from "./add-cat-instructions.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AddCat = () => {
  const { state: customerDocumentId } = useLocation();
  const { customerDocumentId: docId } = customerDocumentId ?? {};

  return (
    <Container>
      <AddCatTitleAndLoader />

      <ParentDiv>
        <AddCatInstructions />
        <CatDetailsForm {...{ docId }} />
      </ParentDiv>
    </Container>
  );
};

export default AddCat;
