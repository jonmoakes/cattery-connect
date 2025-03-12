import DailyScheduleCheckInOutStatusCell from "../../components/tables/daily-schedule-check-in-out-status-cell/daily-schedule-check-in-out-status-cell.component";
import DailyScheduleCatsDetailCell from "../../components/tables/daily-schedule-cat-details-cell.component";

const DAILY_SCHEDULE_TABLE_COLUMNS = [
  {
    Header: "status",
    accessor: "status",
    Cell: ({ row, value }) => {
      return <DailyScheduleCheckInOutStatusCell {...{ row, value }} />;
    },
  },
  {
    Header: "cat details",
    accessor: "cats",
    Cell: ({ value }) => {
      return <DailyScheduleCatsDetailCell {...{ value }} />;
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

export default DAILY_SCHEDULE_TABLE_COLUMNS;
