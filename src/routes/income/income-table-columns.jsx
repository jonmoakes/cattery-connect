import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import EmailCell from "../../components/tables/email-cell.component";
import FormattedDateCell from "../../components/tables/formatted-date-cell.component";

const INCOME_TABLE_COLUMNS = [
  {
    Header: "Payment Received On",
    accessor: "createdAtAsDateObjectForSearching",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
  {
    Header: "Amount received",
    accessor: "amount",
    Cell: ({ value }) => {
      return (
        <CustomBalancedText>£{(value / 100).toFixed(2)}</CustomBalancedText>
      );
    },
  },
  {
    Header: "Payee Name",
    accessor: "name",
  },
  {
    Header: "Payee email",
    accessor: "email",
    Cell: ({ value }) => {
      return <EmailCell {...{ value }} />;
    },
  },
  {
    Header: "Receipt URL",
    accessor: "receipt_url",
    Cell: ({ value }) => {
      return (
        <a href={value}>
          <CustomBalancedText>tap to view</CustomBalancedText>
        </a>
      );
    },
  },
  {
    Header: "Payment Id",
    accessor: "payment_intent",
    Cell: ({ value }) => {
      return <CustomBalancedText>{value}</CustomBalancedText>;
    },
  },
];

export default INCOME_TABLE_COLUMNS;
