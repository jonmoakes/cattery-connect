import useSetCustomerDataToBePassedForEditingUseEffect from "./all-customers-hooks/use-set-customer-data-to-be-passed-for-editing-use-effect";

import EditCustomerButton from "./edit-customer-button.component";
import DeleteCustomerButton from "./delete-customer-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const EditAndDeleteCustomerButtons = ({ chosenEntry }) => {
  useSetCustomerDataToBePassedForEditingUseEffect(chosenEntry);

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EditCustomerButton />
          <DeleteCustomerButton />
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default EditAndDeleteCustomerButtons;
