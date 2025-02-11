import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsFeedingInfoInput = ({ handleCatDetailsChange }) => {
  const { catsFeedingInfo } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <CustomSpan className="red">* </CustomSpan>
        Feeding info:
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
