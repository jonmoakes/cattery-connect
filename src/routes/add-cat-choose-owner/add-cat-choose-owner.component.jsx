import useGetAllCustomerSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetAllCustomersThunkUseEffect from "../../hooks/use-get-all-customers-thunk-use-effect";
import useHandleCustomerSelectionChange from "./add-cat-choose-owner-hooks/use-handle-customer-selection-change";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import CustomerSelectionForm from "./customer-selection-form.component";
import ConfirmCustomerChoice from "./confirm-customer-choice.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import AllCatsNoCatsFound from "../all-cats/all-cats-no-cats-found.component";

const AddCatChooseOwner = () => {
  const { getAllCustomersError, allCustomers } = useGetAllCustomerSelectors();
  useGetAllCustomersThunkUseEffect();
  const { handleCustomerSelectionChange, selectedCustomer } =
    useHandleCustomerSelectionChange();

  return (
    <Container>
      <ParentDiv>
        <h1>choose cat owner</h1>
      </ParentDiv>

      {getAllCustomersError ? (
        <ShowFetchErrors />
      ) : allCustomers && allCustomers.length ? (
        <>
          <ParentDiv>
            <CustomerSelectionForm
              {...{ selectedCustomer, handleCustomerSelectionChange }}
            />
            <ConfirmCustomerChoice {...{ selectedCustomer }} />
          </ParentDiv>
        </>
      ) : (
        <AllCatsNoCatsFound />
      )}
    </Container>
  );
};

export default AddCatChooseOwner;
