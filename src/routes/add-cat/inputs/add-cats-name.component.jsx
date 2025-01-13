import Balancer from "react-wrap-balancer";
import PropTypes from "prop-types";

import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCatsName = ({ handleAddCatsDetailsChange }) => {
  const { catsName } = useGetCatsDetailsSelectors();

  return (
    <>
      <Label>
        <Balancer>
          <RedSpan>* </RedSpan>
          cats name:
        </Balancer>
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

AddCatsName.propTypes = {
  handleAddCatsDetailsChange: PropTypes.func.isRequired,
};

export default AddCatsName;
