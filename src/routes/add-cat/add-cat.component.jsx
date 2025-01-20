import useUploadCatResultSwalUseEffect from "../../components/cat-details-form/cat-details-hooks/use-upload-cat-result-swal-use-effect";

import AddCatTitleAndLoader from "./add-cat-title-and-loader.component";
import AddCatInstructions from "./add-cat-instructions.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AddCat = () => {
  useUploadCatResultSwalUseEffect();

  return (
    <Container>
      <AddCatTitleAndLoader />

      <ParentDiv>
        <AddCatInstructions />
        <CatDetailsForm />
      </ParentDiv>
    </Container>
  );
};

export default AddCat;
