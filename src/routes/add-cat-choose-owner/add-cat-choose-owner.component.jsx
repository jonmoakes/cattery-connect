import useGetAllCustomerSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetAllCustomersThunkUseEffect from "../../hooks/use-get-all-customers-thunk-use-effect";
import useHandleCustomerSelectChange from "../../components/customer-select-drop-down/customer-select-dropdown-hooks/use-handle-customer-select-change";
import useDropdownLogic from "../../components/customer-select-drop-down/customer-select-dropdown-hooks/use-dropdown-logic";

import AllCatsNoCatsFound from "../all-cats/all-cats-no-cats-found.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import CustomerSelectDropdown from "../../components/customer-select-drop-down/customer-select-dropdown.component";
import ConfirmCustomerChoice from "./confirm-customer-choice.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const AddCatChooseOwner = () => {
  const { getAllCustomersError } = useGetAllCustomerSelectors();
  const { hasAtLeastOneCustomer } = useDropdownLogic();
  const { handleCustomerSelectChange, selectedCustomerName } =
    useHandleCustomerSelectChange();

  useGetAllCustomersThunkUseEffect();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">choose cat owner</CustomBalancedText>
      </ParentDiv>

      {getAllCustomersError ? (
        <ShowFetchErrors />
      ) : hasAtLeastOneCustomer ? (
        <>
          <ParentDiv>
            <Form className="small-margin-bottom">
              <CustomerSelectDropdown {...{ handleCustomerSelectChange }} />
            </Form>
            {selectedCustomerName ? (
              <ConfirmCustomerChoice {...{ selectedCustomerName }} />
            ) : null}
          </ParentDiv>
        </>
      ) : (
        <AllCatsNoCatsFound />
      )}
    </Container>
  );
};

export default AddCatChooseOwner;
