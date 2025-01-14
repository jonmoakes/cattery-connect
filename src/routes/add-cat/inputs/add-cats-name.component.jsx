import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCatsName = ({ handleAddCatsDetailsChange }) => {
  const { catsName } = useGetCatsDetailsSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        cats name:
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
