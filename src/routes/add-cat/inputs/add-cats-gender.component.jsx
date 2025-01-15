import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsGender = ({ handleAddCatsDetailsChange }) => {
  const { catsGender } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>Gender:</Label>

      <StyledInput
        type="text"
        name="catsGender"
        value={catsGender || ""}
        onChange={handleAddCatsDetailsChange}
      />
    </>
  );
};

export default AddCatsGender;
