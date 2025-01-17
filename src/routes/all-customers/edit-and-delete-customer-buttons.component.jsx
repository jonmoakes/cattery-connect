import useDeleteCustomer from "./all-customers-hooks/use-delete-customer";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const EditAndDeleteCustomerButtons = ({ chosenEntry }) => {
  const { $id: documentId, name } = chosenEntry ?? {};
  const { deleteCustomer } = useDeleteCustomer();

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton className="edit" type="button">
            edit customer
          </EntryOptionsButton>

          <EntryOptionsButton
            className="delete"
            type="button"
            onClick={() => deleteCustomer(name, documentId)}
          >
            delete customer
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default EditAndDeleteCustomerButtons;
