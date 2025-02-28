import TodaysScheduleCatsDetailCell from "../../components/tables/todays-schedule-cat-details-cell.component";

const TODAYS_SCHEDULE_TABLE_COLUMNS = [
  {
    Header: "status",
    accessor: "status",
  },
  {
    Header: "cat details",
    accessor: "cats",
    Cell: ({ value }) => {
      return <TodaysScheduleCatsDetailCell {...{ value }} />;
    },
  },
  {
    Header: "customer name",
    accessor: "customerName",
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

export default TODAYS_SCHEDULE_TABLE_COLUMNS;
