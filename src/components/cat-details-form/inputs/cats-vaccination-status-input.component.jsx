import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import HiddenVaxInput from "./vax-status/hidden-vax-input.component";
import LabelAndCurrentChoice from "./vax-status/label-and-current-choice.component";
import VaxInput from "./vax-status/vax-input.component";

const CatsVaccinationStatusInput = ({ handleCatDetailsChange }) => {
  const { vaccinationStatus } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <LabelAndCurrentChoice {...{ vaccinationStatus }} />
      <VaxInput {...{ vaccinationStatus, handleCatDetailsChange }} />
      <HiddenVaxInput {...{ vaccinationStatus }} />
    </>
  );
};

export default CatsVaccinationStatusInput;
