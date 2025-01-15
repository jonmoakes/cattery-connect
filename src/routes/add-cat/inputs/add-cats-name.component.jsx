import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCatsName = ({ handleAddCatsDetailsChange }) => {
  const { catsName } = useGetAddCatDetailsSelectors();

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
        onChange={handleAddCatsDetailsChange}
        required
      />
    </>
  );
};

export default AddCatsName;
