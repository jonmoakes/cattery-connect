import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const AddCatsBehaviourInfo = ({ handleAddCatsDetailsChange }) => {
  const { catsBehaviourInfo } = useGetAddCatDetailsSelectors();

  return (
    <>
      <BlackHr />
      <Label>Behaviour info:</Label>

      <StyledTextArea
        type="text"
        name="catsBehaviourInfo"
        value={catsBehaviourInfo || ""}
        onChange={handleAddCatsDetailsChange}
        placeholder={"Information about temperament, preferences, or dislikes."}
      />
    </>
  );
};

export default AddCatsBehaviourInfo;
