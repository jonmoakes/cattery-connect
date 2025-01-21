import EditCatTitleAndLoader from "./edit-cat-title-and-loader.component";
import CatDetailsForm from "../../components/cat-details-form/cat-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useEditCatVariables from "./edit-cat-hooks/use-edit-cat-variables";

const EditCat = () => {
  const { catToEdit } = useEditCatVariables();

  return (
    <Container>
      <EditCatTitleAndLoader />

      <ParentDiv>
        {catToEdit ? (
          <CatDetailsForm />
        ) : (
          <>
            <h2>no cat found</h2>
            <p>
              if you used the browsers forward and back buttons, this means the
              data of the cat you were going to edit has been lost.
            </p>
            <p>
              please go back to the customers table and select the 'view
              [customer name's] cats' button' again.
            </p>
            <p>
              whilst on this page, please don't use the browsers forward and
              backwards button or the reload page button to avoid the loss of
              data.
            </p>
          </>
        )}
      </ParentDiv>
    </Container>
  );
};

export default EditCat;
