import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsNameInput = ({ handleCatDetailsChange }) => {
  const { catsName } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <CustomSpan className="red">* </CustomSpan>
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
