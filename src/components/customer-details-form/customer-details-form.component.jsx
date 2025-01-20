import useSetCustomerDetailsFormValuesUseEffect from "./customer-details-form-hooks/use-set-customer-details-form-values-use-effect";
import useHandleCustomerDetailsChange from "./customer-details-form-hooks/use-handle-customer-details-change";
import useSubmitCustomer from "./customer-details-form-hooks/use-submit-customer";

import CustomerNameInput from "./inputs/customer-name-input.component";
import CustomerEmailInput from "./inputs/customer-email-input.component";
import CustomerPhoneNumberInput from "./inputs/customer-phone-number-input.component";
import CustomerAddressInput from "./inputs/customer-address-input.component";
import CustomerEmergencyContactDetailsInput from "./inputs/customer-emergency-contact-details-input.component";
import UploadCustomerDetailsButton from "./upload-customer-details-button.component";

import { Form } from "../../styles/form/form.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const CustomerDetailsForm = () => {
  useSetCustomerDetailsFormValuesUseEffect();
  const { submitCustomer } = useSubmitCustomer();

  const { handleCustomerDetailsChange } = useHandleCustomerDetailsChange();

  return (
    <ParentDiv>
      <Form className="small-top-margin" onSubmit={submitCustomer}>
        <CustomerNameInput {...{ handleCustomerDetailsChange }} />
        <CustomerEmailInput {...{ handleCustomerDetailsChange }} />
        <CustomerPhoneNumberInput {...{ handleCustomerDetailsChange }} />
        <CustomerAddressInput {...{ handleCustomerDetailsChange }} />
        <CustomerEmergencyContactDetailsInput
          {...{ handleCustomerDetailsChange }}
        />
        <UploadCustomerDetailsButton />
      </Form>
    </ParentDiv>
  );
};

export default CustomerDetailsForm;
