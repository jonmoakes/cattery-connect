import useGetMoveCustomerToNewCatterySelectors from "../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";
import useCheckCustomerCanBeMoved from "./hooks/use-check-customer-can-be-moved";
import useHandleCustomerIdChange from "./hooks/use-handle-customer-id-change";

import CustomSpan from "../../components/custom-span/custom-span.component";

import { Button } from "../../styles/button/button.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";

const ChooseCustomerId = () => {
  const { customerId } = useGetMoveCustomerToNewCatterySelectors();
  const { checkCustomerCanBeMoved } = useCheckCustomerCanBeMoved();
  const { handleCustomerIdChange } = useHandleCustomerIdChange();

  return (
    <Form onSubmit={checkCustomerCanBeMoved} className="small-margin-bottom">
      <Label>
        <CustomSpan className="red">* </CustomSpan>customer id:
      </Label>
      <StyledInput
        type="text"
        name="customerId"
        onChange={handleCustomerIdChange}
        value={customerId || ""}
        required
      />

      <Button type="submit">check</Button>
    </Form>
  );
};

export default ChooseCustomerId;
