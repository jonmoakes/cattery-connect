import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsBreed = ({ handleAddCatsDetailsChange }) => {
  const { catsBreed } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>breed:</Label>

      <StyledInput
        type="text"
        name="catsBreed"
        value={catsBreed || ""}
        onChange={handleAddCatsDetailsChange}
      />
    </>
  );
};

export default AddCatsBreed;
