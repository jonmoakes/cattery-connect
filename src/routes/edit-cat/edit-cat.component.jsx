import useUploadCatResultSwalUseEffect from "../../components/cat-details-form/cat-details-hooks/use-upload-cat-result-swal-use-effect";

import { useLocation } from "react-router-dom";

import useSetDefaultCatValuesUseEffect from "./edit-cat-hooks/use-set-deafult-cat-values-use-effect";

import EditCatTitleAndLoader from "./edit-cat-title-and-loader.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const EditCat = () => {
  useUploadCatResultSwalUseEffect();
  const { state: data } = useLocation();
  const { chosenEntry: cat, customerDocumentId: docId } = data;
  useSetDefaultCatValuesUseEffect(cat);

  return (
    <Container>
      <EditCatTitleAndLoader {...{ cat }} />

      <ParentDiv>
        <CatDetailsForm {...{ docId }} />
      </ParentDiv>
    </Container>
  );
};

export default EditCat;
