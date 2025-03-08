import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";
import { NextAndPreviousDateButton } from "../../styles/button/button.styles";
import { NextAndPreviousDateButtonContainer } from "../../styles/div/div.styles";
import useGetNextOrPreviousDaysPenData from "./view-pen-data-hooks/use-get-next-or-previous-days-pen-data";

const NextAndPreviousDatesButtons = () => {
  const { returnedChosenDate } = useGetViewPenDataSelectors();

  const { getNextOrPreviousDaysPenData } = useGetNextOrPreviousDaysPenData();

  return (
    <>
      {returnedChosenDate ? (
        <NextAndPreviousDateButtonContainer>
          <NextAndPreviousDateButton
            type="button"
            onClick={() => getNextOrPreviousDaysPenData("previous")}
          >
            prev day
          </NextAndPreviousDateButton>
          <NextAndPreviousDateButton
            type="button"
            onClick={() => getNextOrPreviousDaysPenData("next")}
          >
            next day
          </NextAndPreviousDateButton>
        </NextAndPreviousDateButtonContainer>
      ) : null}
    </>
  );
};

export default NextAndPreviousDatesButtons;
