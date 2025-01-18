import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsMedicalInfoInput = ({ handleCatDetailsChange }) => {
  const { catsMedicalInfo } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>medical info:</Label>

      <StyledTextArea
        type="text"
        name="catsMedicalInfo"
        value={catsMedicalInfo || ""}
        onChange={handleCatDetailsChange}
        placeholder={
          "Details of any medical issues, allergies, or other needs."
        }
      />
    </>
  );
};

export default CatsMedicalInfoInput;
