import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsAge = ({ handleAddCatsDetailsChange }) => {
  const { catsAge } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>age:</Label>

      <StyledInput
        type="number"
        onWheel={(e) => e.target.blur()}
        name="catsAge"
        value={catsAge || ""}
        onChange={handleAddCatsDetailsChange}
      />
    </>
  );
};

export default AddCatsAge;
