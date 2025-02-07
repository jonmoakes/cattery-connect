import PhoneNumberCell from "../../components/tables/phone-number-cell.component";
import EmailCell from "../../components/tables/email-cell.component";
import EmergencyContactsCell from "../../components/tables/emergency-contacts-cell.component";
import NavigateToCatRouteCell from "../../components/tables/navigate-to-cat-route-cell.component";
import WrapTextCell from "../../components/tables/wrap-text-cell.component";

import { addCatRoute, viewCustomersCatsRoute } from "../../strings/routes";

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
    Header: "emergency Contact",
    accessor: "emergencyContactDetails",
    Cell: ({ value }) => <EmergencyContactsCell {...{ value }} />,
  },
  {
    Header: "address",
    accessor: "address",
    Cell: ({ value }) => <WrapTextCell {...{ value }} />,
  },
  {
    Header: "cat details",
    accessor: "catDetails",
    Cell: ({ row }) => {
      const detailsRequiredForCatManagement = {
        customerDocumentId: row.original.$id,
        customerName: row.original.name,
        catDetails: row.original.catDetails,
      };
      return (
        <>
          <NavigateToCatRouteCell
            {...{ detailsRequiredForCatManagement }}
            route={viewCustomersCatsRoute}
          />
        </>
      );
    },
  },
  {
    Header: "Add Cat",
    Cell: ({ row }) => {
      const detailsRequiredForCatManagement = {
        customerDocumentId: row.original.$id,
        customerName: row.original.name,
      };
      return (
        <NavigateToCatRouteCell
          {...{ detailsRequiredForCatManagement }}
          route={addCatRoute}
        />
      );
    },
  },
  {
    Header: "customer Id",
    accessor: "customerId",
    Cell: ({ value }) => <p>{value}</p>,
  },
];

export default ALL_CUSTOMERS_TABLE_COLUMNS;
