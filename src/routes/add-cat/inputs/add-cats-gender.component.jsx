import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsGender = ({ handleAddCatsDetailsChange }) => {
  const { catsGender } = useGetCatsDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>cats Gender:</Label>

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
