import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CatsBehaviourInfoInput = ({ handleCatDetailsChange }) => {
  const { catsBehaviourInfo } = useGetCatDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>Behaviour info:</Label>

      <StyledTextArea
        type="text"
        name="catsBehaviourInfo"
        value={catsBehaviourInfo || ""}
        onChange={handleCatDetailsChange}
        placeholder={"Information about temperament, preferences, or dislikes."}
      />
    </>
  );
};

export default CatsBehaviourInfoInput;
