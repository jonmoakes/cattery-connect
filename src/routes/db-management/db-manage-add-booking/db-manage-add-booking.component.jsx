import useGetAllCustomersThunkUseEffect from "../../../hooks/use-get-all-customers-thunk-use-effect";

import DbManageAddBookingTitleAndLoader from "./db-manage-add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";

const DbManageAddBooking = () => {
  useGetAllCustomersThunkUseEffect();

  return (
    <Container>
      <DbManageAddBookingTitleAndLoader />

      <ParentDiv>
        <Form>
          <ChooseCustomerSelectInput />
          <ChooseCatsInput />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default DbManageAddBooking;
