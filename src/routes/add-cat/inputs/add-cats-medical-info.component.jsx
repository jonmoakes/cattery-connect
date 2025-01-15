import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsMedicalInfo = ({ handleAddCatsDetailsChange }) => {
  const { catsMedicalInfo } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>medical info:</Label>

      <StyledTextArea
        type="text"
        name="catsMedicalInfo"
        value={catsMedicalInfo || ""}
        onChange={handleAddCatsDetailsChange}
        placeholder={
          "Details of any medical issues, allergies, or other needs."
        }
      />
    </>
  );
};

export default AddCatsMedicalInfo;
