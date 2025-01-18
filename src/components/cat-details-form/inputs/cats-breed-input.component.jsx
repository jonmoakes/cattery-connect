import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsBreedInput = ({ handleCatDetailsChange }) => {
  const { catsBreed } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>breed:</Label>

      <StyledInput
        type="text"
        name="catsBreed"
        value={catsBreed || ""}
        onChange={handleCatDetailsChange}
      />
    </>
  );
};

export default CatsBreedInput;
