import { format } from "date-fns";

import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

const ChosenDateWhenNoData = ({ date }) => {
  const { returnedChosenDate, chosenDatePenData } =
    useGetViewPenDataSelectors();

  return (
    <>
      {returnedChosenDate ? null : !Object.keys(chosenDatePenData).length &&
        date ? (
        <CustomBalancedText>
          chosen date - {format(date, "dd MMMM yyyy")}
        </CustomBalancedText>
      ) : (
        <CustomBalancedText>
          {format(new Date(), "dd MMMM yyyy")}
        </CustomBalancedText>
      )}
    </>
  );
};

export default ChosenDateWhenNoData;
