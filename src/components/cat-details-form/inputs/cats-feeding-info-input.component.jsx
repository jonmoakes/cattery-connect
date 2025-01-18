import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CatsFeedingInfoInput = ({ handleCatDetailsChange }) => {
  const { catsFeedingInfo } = useGetCatDetailsManagementSelectors();

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
        onChange={handleCatDetailsChange}
        required
        placeholder={
          "Information about diet, brand of food, feeding schedule, or special dietary requirements."
        }
      />
    </>
  );
};

export default CatsFeedingInfoInput;
