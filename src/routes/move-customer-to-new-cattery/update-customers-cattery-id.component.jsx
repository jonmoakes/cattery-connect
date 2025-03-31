import useGetMoveCustomerToNewCatterySelectors from "../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";
import useHandleNewCatteryIdChange from "./hooks/use-handle-new-cattery-id-change";
import useUpdateCustomersCatteryId from "./hooks/use-update-customers-cattery-id";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { Button } from "../../styles/button/button.styles";
import { AnimatedDiv, ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";

const UpdateCustomersCatteryId = () => {
  const { customerCanBeMoved, newCatteryId } =
    useGetMoveCustomerToNewCatterySelectors();
  const { updateCustomersCatteryId } = useUpdateCustomersCatteryId();
  const { handleNewCatteryIdChange } = useHandleNewCatteryIdChange();

  return (
    <>
      {customerCanBeMoved && customerCanBeMoved !== "customer doesn't exist" ? (
        <ParentDiv>
          <AnimatedDiv>
            <CustomBalancedText>
              this customer can be moved as they have no outstanding payments at
              their current cattery.
            </CustomBalancedText>
            <CustomBalancedText>
              enter in a new cattery id ( lowercased! ).
            </CustomBalancedText>

            <Form
              onSubmit={updateCustomersCatteryId}
              className="no-margin-top-small-margin-bottom"
            >
              <Label>
                <CustomSpan className="red">* </CustomSpan>new cattery ID:
              </Label>
              <StyledInput
                type="text"
                className="untransformed"
                name="newCatteryId"
                onChange={handleNewCatteryIdChange}
                value={newCatteryId || ""}
                required
              />

              {newCatteryId ? (
                <Button type="submit">update cattery ID</Button>
              ) : null}
            </Form>
          </AnimatedDiv>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default UpdateCustomersCatteryId;
