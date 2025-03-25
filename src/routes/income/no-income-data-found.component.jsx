import useIncomeVariables from "./income-hooks/use-income-variables";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const NoIncomeDataFound = ({ data }) => {
  const { formattedMonth } = useIncomeVariables();

  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <CustomBalancedText type="h2">
            no income data found for {formattedMonth}.
          </CustomBalancedText>
          <CustomBalancedText>
            try another month using the next or previous month buttons buttons
            above.
          </CustomBalancedText>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoIncomeDataFound;
