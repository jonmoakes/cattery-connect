import { ColumnDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import PropTypes from "prop-types";

const RenderButtonsList = ({ buttons }) => (
  <>
    {buttons.map((button) => {
      const { id, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          <Button className="teal" onClick={onClick}>
            {text}
          </Button>
          <BlackHr />
        </ColumnDiv>
      );
    })}
  </>
);

RenderButtonsList.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export default RenderButtonsList;
