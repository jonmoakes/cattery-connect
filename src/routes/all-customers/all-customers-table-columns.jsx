import PhoneNumberCell from "../../components/tables/phone-number-cell.component";
import EmailCell from "../../components/tables/email-cell.component";
import EmergencyContactsCell from "../../components/tables/emergency-contacts-cell.component";
import NavigateToRouteCell from "../../components/tables/navigate-to-route-cell.component";
import { addCatRoute } from "../../strings/routes";

const ALL_CUSTOMERS_TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "phone",
    accessor: "phoneNumber",
    Cell: ({ value }) => <PhoneNumberCell value={value} />,
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => <EmailCell value={value} />,
  },
  {
    Header: "🚨 Contact",
    accessor: "emergencyContactDetails",
    Cell: ({ value }) => <EmergencyContactsCell {...{ value }} />,
  },
  {
    Header: "address",
    accessor: "address",
  },
  {
    Header: "cust Id",
    accessor: "customerId",
    Cell: ({ value }) => <p>{value}</p>,
  },
  {
    Header: "Add Cat",
    Cell: ({ row }) => {
      const customerId = row.original.customerId;
      return (
        <NavigateToRouteCell route={addCatRoute} customerId={customerId} />
      );
    },
  },
];

export default ALL_CUSTOMERS_TABLE_COLUMNS;
