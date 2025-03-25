import useGetIncomeSelectors from "../../hooks/selectors/use-get-income-selectors";
import useIncomeVariables from "./income-hooks/use-income-variables";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import HelpAndMonthChangeButtons from "./help-and-month-change-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleLoaderHelpAndMonthChangeButtons = () => {
  const { incomeDataIsLoading } = useGetIncomeSelectors();
  const { formattedMonth, totalOfReturnedEntriesInPounds } =
    useIncomeVariables();

  return (
    <>
      {incomeDataIsLoading ? (
        <SkeletonBox loadingText="Fetching Income Data..." />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">
          In-App Bookings Income for {formattedMonth}
        </CustomBalancedText>

        {totalOfReturnedEntriesInPounds > 0 ? (
          <CustomSpan>
            grand total of returned entries:
            <br />£{totalOfReturnedEntriesInPounds}
          </CustomSpan>
        ) : null}

        <HelpAndMonthChangeButtons />
      </ParentDiv>
    </>
  );
};

export default TitleLoaderHelpAndMonthChangeButtons;
