import CustomSpan from "../../components/custom-span/custom-span.component";
import EmailCell from "../../components/tables/email-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";

const ALL_USERS_TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => <EmailCell {...{ value }} />,
  },
  {
    Header: "phone",
    accessor: "phoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "cattery ID",
    accessor: "catteryId",
    Cell: ({ value }) => <CustomSpan type="lowercase">{value}</CustomSpan>,
  },
];

export default ALL_USERS_TABLE_COLUMNS;
