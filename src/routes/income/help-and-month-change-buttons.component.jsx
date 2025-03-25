import useGetIncomeSelectors from "../../hooks/selectors/use-get-income-selectors";
import useIncomeVariables from "./income-hooks/use-income-variables";

import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import NextAndPreviousMonthButtons from "./next-and-previous-month-buttons.component";

import { incomeAccordionData } from "./income-accordion-data";

const HelpAndMonthChangeButtons = () => {
  const { incomeDataError } = useGetIncomeSelectors();
  const { totalOfReturnedEntriesInPounds } = useIncomeVariables();

  return (
    <>
      {!incomeDataError ? (
        <>
          <HelpAccordion
            className={
              totalOfReturnedEntriesInPounds > 0 ? "income" : "no-margin-top"
            }
            openText="income help"
            data={incomeAccordionData}
          />
          <NextAndPreviousMonthButtons />
        </>
      ) : null}
    </>
  );
};

export default HelpAndMonthChangeButtons;
