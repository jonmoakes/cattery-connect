import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

import AddCatTitleAndLoader from "./add-cat-title-and-loader.component";
import AddCatInstructions from "./add-cat-instructions.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";
import AddCatNoDocId from "./add-cat-no-doc-id.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AddCat = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();

  const { customerDocumentId } = detailsRequiredForCatManagement ?? "";

  return (
    <Container>
      {customerDocumentId ? (
        <>
          <AddCatTitleAndLoader />

          <ParentDiv>
            <AddCatInstructions />
            <CatDetailsForm />
          </ParentDiv>
        </>
      ) : (
        <AddCatNoDocId />
      )}
    </Container>
  );
};

export default AddCat;
