import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useGetAllCustomersThunkUseEffect from "../../../hooks/use-get-all-customers-thunk-use-effect";
import useCustomersCatsLogic from "./db-manage-add-booking-hooks/use-customers-cats-logic";

import DbManageAddBookingTitleAndLoader from "./db-manage-add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";
import CheckInAndOutDateInput from "./inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";

import { BlackHr } from "../../../styles/hr/hr.styles";

const DbManageAddBooking = () => {
  const { checkInDate, checkOutDate } = useGetDbManageAddBookingSelectors();
  const { customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected } =
    useCustomersCatsLogic();
  useGetAllCustomersThunkUseEffect();

  return (
    <Container>
      <DbManageAddBookingTitleAndLoader />

      <ParentDiv>
        <Form>
          <ChooseCustomerSelectInput />
          <ChooseCatsInput />
          {customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected ? (
            <>
              <BlackHr />
              <CheckInAndOutDateInput
                dateType="checkInDate"
                label="choose check-in date:"
                selectedDate={checkInDate}
              />
              {/* <CheckInDateInput /> */}
              <BlackHr />
              <CheckInAndOutDateInput
                dateType="checkOutDate"
                label="choose check-out date:"
                selectedDate={checkOutDate}
              />
              {/* <CheckOutDateInput /> */}
              <BlackHr />
            </>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default DbManageAddBooking;
