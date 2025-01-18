import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsAgeInput = ({ handleCatDetailsChange }) => {
  const { catsAge } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>age:</Label>

      <StyledInput
        type="number"
        onWheel={(e) => e.target.blur()}
        name="catsAge"
        value={catsAge || ""}
        onChange={handleCatDetailsChange}
      />
    </>
  );
};

export default CatsAgeInput;
