import useSetDataToBePassedUseEffect from "./all-customers-hooks/use-set-data-to-be-passed-use-effect";
import useDeleteCustomer from "./all-customers-hooks/use-delete-customer";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

import { editCustomerRoute } from "../../strings/routes";

const EditAndDeleteCustomerButtons = ({ chosenEntry }) => {
  useSetDataToBePassedUseEffect(chosenEntry);
  const { deleteCustomer } = useDeleteCustomer();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="edit"
            type="button"
            onClick={() => hamburgerHandlerNavigate(editCustomerRoute)}
          >
            edit customer
          </EntryOptionsButton>

          <EntryOptionsButton
            className="delete"
            type="button"
            onClick={deleteCustomer}
          >
            delete customer
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default EditAndDeleteCustomerButtons;
