import useFetchIncomeDataThunkUseEffect from "./income-hooks/use-fetch-income-data-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import TitleLoaderHelpAndMonthChangeButtons from "./title-loader-help-and-month-change-buttons.component";
import IncomeTable from "./income-table.component";

import { Container } from "../../styles/container/container.styles";

const Income = () => {
  useFetchIncomeDataThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Income"
        description="View and manage the income generated from bookings at your cattery. Track payments, earnings, and financial history."
      />
      <TitleLoaderHelpAndMonthChangeButtons />
      <IncomeTable />
    </Container>
  );
};

export default Income;
