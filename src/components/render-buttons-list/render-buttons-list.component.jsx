import { ColumnDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const RenderButtonsList = ({ buttons }) => (
  <>
    <BlackHr />
    {buttons.map((button) => {
      const { id, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          <RadialTealButton onClick={onClick}>{text}</RadialTealButton>
        </ColumnDiv>
      );
    })}
    <BlackHr />
  </>
);

export default RenderButtonsList;
