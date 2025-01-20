// import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";
// import useAddCatResultSwalUseEffect from "./cat-details-hooks/use-upload-cat-result-swal-use-effect";
import useHandleCatDetailsChange from "./cat-details-hooks/use-handle-cat-details-change";
import useSubmitCat from "./cat-details-hooks/use-submit-cat";

import CatsName from "./inputs/cats-name-input.component";
import CatsVaccinationStatusInput from "./inputs/cats-vaccination-status-input.component";
import UploadCatDetailsButton from "./upload-cat-details-button.component";
import CatsFeedingInfoInput from "./inputs/cats-feeding-info-input.component";
import CatsBreedInput from "./inputs/cats-breed-input.component";
import CatsAgeInput from "./inputs/cats-age-input.component";
import CatsGenderInput from "./inputs/cats-gender-input.component";
import CatsMedicalInfoInput from "./inputs/cats-medical-info-input.component";
import CatsBehaviourInfoInput from "./inputs/cats-behaviour-info-input.component";

import { Form } from "../../styles/form/form.styles";
import useSetCatDetailsFormValuesUseEffect from "./cat-details-hooks/use-set-cat-details-form-values-use-effect";

const CatDetailsForm = () => {
  useSetCatDetailsFormValuesUseEffect();
  // const { catDetails } = useGetCatDetailsManagementSelectors();
  // useAddCatResultSwalUseEffect();
  const { submitCat } = useSubmitCat();
  const { handleCatDetailsChange } = useHandleCatDetailsChange();

  return (
    <Form className="small-top-margin" onSubmit={submitCat}>
      <CatsName {...{ handleCatDetailsChange }} />
      <CatsVaccinationStatusInput {...{ handleCatDetailsChange }} />
      <CatsFeedingInfoInput {...{ handleCatDetailsChange }} />
      <CatsBreedInput {...{ handleCatDetailsChange }} />
      <CatsAgeInput {...{ handleCatDetailsChange }} />
      <CatsGenderInput {...{ handleCatDetailsChange }} />
      <CatsMedicalInfoInput {...{ handleCatDetailsChange }} />
      <CatsBehaviourInfoInput {...{ handleCatDetailsChange }} />
      <UploadCatDetailsButton />
    </Form>
  );
};

export default CatDetailsForm;
