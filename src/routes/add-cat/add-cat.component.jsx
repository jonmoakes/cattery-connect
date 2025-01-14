import { useLocation } from "react-router-dom";

import useSubmitAddCat from "./add-cat-hooks/use-submit-add-cat";
import useHandleAddCatsDetailsChange from "./add-cat-hooks/use-handle-add-cats-details-change";

import AddCatsName from "./inputs/add-cats-name.component";
import AddCatsBreed from "./inputs/add-cats-breed.component";
import AddCatsAge from "./inputs/add-cats-age.component";
import AddCatsGender from "./inputs/add-cats-gender.component";
import AddCatButton from "./add-cat-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const AddCat = () => {
  const { submitAddCat } = useSubmitAddCat();
  const { handleAddCatsDetailsChange } = useHandleAddCatsDetailsChange();
  const location = useLocation();
  const customerId = location.state;

  console.log(customerId);

  return (
    <Container>
      <ParentDiv>
        <h1>add a cat</h1>
      </ParentDiv>

      <ParentDiv>
        <Form onSubmit={submitAddCat}>
          <AddCatsName {...{ handleAddCatsDetailsChange }} />
          <AddCatsBreed {...{ handleAddCatsDetailsChange }} />
          <AddCatsAge {...{ handleAddCatsDetailsChange }} />
          <AddCatsGender {...{ handleAddCatsDetailsChange }} />
          <AddCatButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default AddCat;
