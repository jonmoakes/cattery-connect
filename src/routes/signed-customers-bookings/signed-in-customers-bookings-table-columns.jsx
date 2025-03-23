import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import SettlePaymentCell from "../../components/tables/settle-payment-cell.component";

const SIGNED_IN_CUSTOMERS_BOOKINGS_TABLE_COLUMNS = [
  {
    Header: "booking ID",
    accessor: "bookingId",
  },

  {
    Header: "cats in booking",
    accessor: "catsInBooking",
  },
  {
    Header: "check in date",
    accessor: "checkInDateAsDateObjectForSorting",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
  {
    Header: "check in slot",
    accessor: "checkInSlot",
    Cell: ({ value }) => {
      return <CustomBalancedText> {value.toUpperCase()}</CustomBalancedText>;
    },
  },
  {
    Header: "check out date",
    accessor: "checkOutDate",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
  {
    Header: "check out slot",
    accessor: "checkOutSlot",
    Cell: ({ value }) => {
      return <CustomBalancedText>{value.toUpperCase()}</CustomBalancedText>;
    },
  },
  {
    Header: "cost of booking",
    accessor: "totalCost",
    Cell: ({ value }) => {
      return (
        <CustomBalancedText>£{(value / 100).toFixed(2)}</CustomBalancedText>
      );
    },
  },
  {
    Header: "payment status",
    accesor: "paymentStatus",
    Cell: ({ row }) => {
      return <SettlePaymentCell {...{ row }} />;
    },
  },
];

export default SIGNED_IN_CUSTOMERS_BOOKINGS_TABLE_COLUMNS;
