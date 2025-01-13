import useAddCustomerResultSwalUseEffect from "./add-customer-hooks/use-add-customer-result-swal-use-effect";
import useSubmitAddCustomer from "./add-customer-hooks/use-submit-add-customer";
import useHandleAddCustomerDetailsChange from "./add-customer-hooks/use-handle-add-customer-details-change";

import AddCustomerTitleAndLoader from "./add-customer-title-and-loader.component";
import AddCustomerName from "./inputs/add-customer-name.component";
import AddCustomerButton from "./add-customer-button.component";
import AddCustomerEmail from "./inputs/add-customer-email.component";
import AddCustomerPhoneNumber from "./inputs/add-customer-phone-number.component";
import AddCustomerAddress from "./inputs/add-customer-address.component";
import AddCustomerEmergencyContactDetails from "./inputs/add-customer-emergency-contact-details.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const AddCustomer = () => {
  useAddCustomerResultSwalUseEffect();
  const { submitAddCustomer } = useSubmitAddCustomer();
  const { handleAddCustomerDetailsChange } =
    useHandleAddCustomerDetailsChange();

  return (
    <Container>
      <AddCustomerTitleAndLoader />

      <ParentDiv>
        <Form onSubmit={submitAddCustomer}>
          <AddCustomerName {...{ handleAddCustomerDetailsChange }} />
          <AddCustomerEmail {...{ handleAddCustomerDetailsChange }} />
          <AddCustomerPhoneNumber {...{ handleAddCustomerDetailsChange }} />
          <AddCustomerAddress {...{ handleAddCustomerDetailsChange }} />
          <AddCustomerEmergencyContactDetails
            {...{ handleAddCustomerDetailsChange }}
          />
          <AddCustomerButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default AddCustomer;
