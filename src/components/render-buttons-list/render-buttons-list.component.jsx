import { ColumnDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const RenderButtonsList = ({ buttons }) => (
  <>
    {buttons.map((button, index) => {
      const { id, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          {index === 0 ? <BlackHr /> : null}
          <RadialTealButton onClick={onClick}>{text}</RadialTealButton>
          <BlackHr />
        </ColumnDiv>
      );
    })}
  </>
);

export default RenderButtonsList;
