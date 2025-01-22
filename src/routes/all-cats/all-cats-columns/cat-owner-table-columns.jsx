import PhoneNumberCell from "../../../components/tables/phone-number-cell.component";
import EmailCell from "../../../components/tables/email-cell.component";
import EmergencyContactsCell from "../../../components/tables/emergency-contacts-cell.component";
import WrapTextCell from "../../../components/tables/wrap-text-cell.component";

const CAT_OWNER_TABLE_COLUMNS = [
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
    Header: "emergency Contact",
    accessor: "emergencyContactDetails",
    Cell: ({ value }) => <EmergencyContactsCell {...{ value }} />,
  },
  {
    Header: "address",
    accessor: "address",
    Cell: ({ value }) => <WrapTextCell {...{ value }} />,
  },
];

export default CAT_OWNER_TABLE_COLUMNS;
