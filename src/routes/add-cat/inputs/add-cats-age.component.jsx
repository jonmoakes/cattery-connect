import PropTypes from "prop-types";

import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";

const AddCatsAge = ({ handleAddCatsDetailsChange }) => {
  const { catsAge } = useGetCatsDetailsSelectors();

  return (
    <>
      <Label>cats age:</Label>

      <StyledInput
        type="text"
        name="catsAge"
        value={catsAge || ""}
        onChange={handleAddCatsDetailsChange}
      />
    </>
  );
};

AddCatsAge.propTypes = {
  handleAddCatsDetailsChange: PropTypes.func.isRequired,
};

export default AddCatsAge;
