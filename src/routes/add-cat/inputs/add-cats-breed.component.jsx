import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsBreed = ({ handleAddCatsDetailsChange }) => {
  const { catsBreed } = useGetCatsDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>cats breed:</Label>

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
