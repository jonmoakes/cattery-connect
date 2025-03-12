import { format } from "date-fns";

import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

const ChosenDateWhenNoData = ({ date }) => {
  const { chosenDatePenData } = useGetViewPenDataSelectors();
  return (
    <>
      {!Object.keys(chosenDatePenData).length && date ? (
        <CustomBalancedText>
          chosen date - {format(date, "dd MMMM yyyy")}
        </CustomBalancedText>
      ) : !chosenDatePenData.length ? (
        <CustomBalancedText>
          {format(new Date(), "dd MMMM yyyy")}
        </CustomBalancedText>
      ) : null}
    </>
  );
};

export default ChosenDateWhenNoData;
