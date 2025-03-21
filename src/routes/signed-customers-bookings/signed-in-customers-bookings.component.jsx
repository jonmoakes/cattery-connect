import useFetchCustomersBookingsThunkUseEffect from "./hooks/use-fetch-customers-bookings-thunk-use-effect";

import TitleAndLoader from "./title-and-loader.component";

import { Container } from "../../styles/container/container.styles";
import SignedInCustomersBookingsTable from "./signed-in-customers-bookings-table.component";

const SignedInCustomersBookings = () => {
  useFetchCustomersBookingsThunkUseEffect();

  return (
    <Container>
      <TitleAndLoader />
      <SignedInCustomersBookingsTable />
    </Container>
  );
};

export default SignedInCustomersBookings;
