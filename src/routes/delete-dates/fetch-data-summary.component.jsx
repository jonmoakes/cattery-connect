import useGetDeleteDatesSelectors from "../../hooks/selectors/use-get-delete-dates-selectors";

import useGetMonthForUi from "./hooks/use-get-month-for-ui";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

const FetchDataSummary = () => {
  const { catteryId, year } = useGetDeleteDatesSelectors();
  const { monthForUi } = useGetMonthForUi();

  return (
    <>
      <CustomBalancedText>
        you will be fetching dates for the following:
      </CustomBalancedText>

      <CustomBalancedText>
        cattery iD -{" "}
        <CustomSpan type="lowercase" className="yellow">
          {catteryId}
        </CustomSpan>
      </CustomBalancedText>

      <CustomBalancedText>
        month - <CustomSpan className="yellow">{monthForUi}</CustomSpan>
      </CustomBalancedText>

      <CustomBalancedText>
        year - <CustomSpan className="yellow">{year}</CustomSpan>
      </CustomBalancedText>
    </>
  );
};

export default FetchDataSummary;
