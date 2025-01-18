import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsGenderInput = ({ handleCatDetailsChange }) => {
  const { catsGender } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>Gender:</Label>

      <StyledInput
        type="text"
        name="catsGender"
        value={catsGender || ""}
        onChange={handleCatDetailsChange}
      />
    </>
  );
};

export default CatsGenderInput;
