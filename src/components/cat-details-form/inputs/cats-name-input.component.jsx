import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CatsNameInput = ({ handleCatDetailsChange }) => {
  const { catsName } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <RedSpan>* </RedSpan>
        name:
      </Label>

      <StyledInput
        type="text"
        name="catsName"
        value={catsName || ""}
        onChange={handleCatDetailsChange}
        required
      />
    </>
  );
};

export default CatsNameInput;
