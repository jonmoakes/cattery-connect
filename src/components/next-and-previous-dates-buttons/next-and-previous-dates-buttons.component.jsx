import useGetNextOrPreviousDaysData from "./next-and-previous-dates-hooks/use-get-next-or-previous-days-data";

import { NextAndPreviousButton } from "../../styles/button/button.styles";
import { NextAndPreviousButtonContainer } from "../../styles/div/div.styles";

const NextAndPreviousDatesButtons = ({ className }) => {
  const { getNextOrPreviousDaysData } = useGetNextOrPreviousDaysData();

  return (
    <NextAndPreviousButtonContainer {...{ className }}>
      <NextAndPreviousButton
        type="button"
        onClick={() => getNextOrPreviousDaysData("previous")}
        className={className ? className : ""}
      >
        &lt;
      </NextAndPreviousButton>
      <NextAndPreviousButton
        type="button"
        onClick={() => getNextOrPreviousDaysData("next")}
      >
        &gt;
      </NextAndPreviousButton>
    </NextAndPreviousButtonContainer>
  );
};

export default NextAndPreviousDatesButtons;
