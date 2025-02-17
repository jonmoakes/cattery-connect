import FormattedDateCell from "../../components/tables/formatted-date-cell.component";

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
    Header: "customer ID",
    accessor: "customerId",
  },
];

export default BOOKINGS_TABLE_COLUMNS;
