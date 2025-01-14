import { ColumnDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const RenderButtonsList = ({ buttons }) => (
  <>
    <BlackHr />
    {buttons.map((button) => {
      const { id, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          <Button className="teal" onClick={onClick}>
            {text}
          </Button>
        </ColumnDiv>
      );
    })}
    <BlackHr />
  </>
);

export default RenderButtonsList;
