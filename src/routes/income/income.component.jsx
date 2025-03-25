import useFetchIncomeDataThunkUseEffect from "./income-hooks/use-fetch-income-data-thunk-use-effect";

import TitleLoaderHelpAndMonthChangeButtons from "./title-loader-help-and-month-change-buttons.component";
import IncomeTable from "./income-table.component";

import { Container } from "../../styles/container/container.styles";

const Income = () => {
  useFetchIncomeDataThunkUseEffect();

  return (
    <Container>
      <TitleLoaderHelpAndMonthChangeButtons />
      <IncomeTable />
    </Container>
  );
};

export default Income;
