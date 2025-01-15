import { useLocation } from "react-router-dom";

import useAddCatResultSwalUseEffect from "./add-cat-hooks/use-add-cat-result-swal-use-effect";
import useSubmitAddCat from "./add-cat-hooks/use-submit-add-cat";
import useHandleAddCatsDetailsChange from "./add-cat-hooks/use-handle-add-cats-details-change";

import AddCatsName from "./inputs/add-cats-name.component";
import AddCatsBreed from "./inputs/add-cats-breed.component";
import AddCatsAge from "./inputs/add-cats-age.component";
import AddCatsGender from "./inputs/add-cats-gender.component";
import AddCatsMedicalInfo from "./inputs/add-cats-medical-info.component";
import AddCatsVaccinationStatus from "./inputs/add-cats-vaccination-status.component";
import AddCatsFeedingInfo from "./inputs/add-cats-feeding-info.component";
import AddCatsBehaviourInfo from "./inputs/add-cats-behaviour-info.component";
import AddCatButton from "./add-cat-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";
import Balancer from "react-wrap-balancer";

const AddCat = () => {
  const location = useLocation();
  const customerDocumentId = location.state;
  useAddCatResultSwalUseEffect();
  const { submitAddCat } = useSubmitAddCat(customerDocumentId);
  const { handleAddCatsDetailsChange } = useHandleAddCatsDetailsChange();

  return (
    <Container>
      <ParentDiv>
        <h1>add a cat</h1>
      </ParentDiv>

      <ParentDiv>
        <p>
          <Balancer>
            please enter the details about the cat that you want to add.
          </Balancer>
        </p>
        <p>
          <Balancer>
            inputs marked with a <RedSpan>*</RedSpan> next to their name are
            required.
          </Balancer>
        </p>

        <Form className="small-top-margin" onSubmit={submitAddCat}>
          <AddCatsName {...{ handleAddCatsDetailsChange }} />
          <AddCatsBreed {...{ handleAddCatsDetailsChange }} />
          <AddCatsAge {...{ handleAddCatsDetailsChange }} />
          <AddCatsGender {...{ handleAddCatsDetailsChange }} />
          <AddCatsMedicalInfo {...{ handleAddCatsDetailsChange }} />
          <AddCatsVaccinationStatus {...{ handleAddCatsDetailsChange }} />
          <AddCatsFeedingInfo {...{ handleAddCatsDetailsChange }} />
          <AddCatsBehaviourInfo {...{ handleAddCatsDetailsChange }} />
          <AddCatButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default AddCat;
