import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import UpdatePaymentStatusCell from "../../components/tables/update-payment-status-cell.component";

const BOOKINGS_TABLE_COLUMNS = [
  {
    Header: "customer name",
    accessor: "customerName",
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
      return <p> {value.toUpperCase()}</p>;
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
      return <p> {value.toUpperCase()}</p>;
    },
  },
  {
    Header: "payment status",
    accessor: "paymentStatus",
    Cell: ({ row, value }) => {
      const documentId = row.original.$id;
      return <UpdatePaymentStatusCell {...{ value, documentId }} />;
    },
  },
  {
    Header: "customer ID",
    accessor: "customerId",
  },
  {
    Header: "booking ID",
    accessor: "bookingId",
  },
];

export default BOOKINGS_TABLE_COLUMNS;
