import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCatsFeedingInfo = ({ handleAddCatsDetailsChange }) => {
  const { catsFeedingInfo } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <RedSpan>* </RedSpan>Feeding info:
      </Label>

      <StyledTextArea
        type="text"
        name="catsFeedingInfo"
        value={catsFeedingInfo || ""}
        onChange={handleAddCatsDetailsChange}
        required
        placeholder={
          "Information about diet, brand of food, feeding schedule, or special dietary requirements."
        }
      />
    </>
  );
};

export default AddCatsFeedingInfo;
