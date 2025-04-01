import useFetchCustomersBookingsThunkUseEffect from "./hooks/use-fetch-customers-bookings-thunk-use-effect";

import TitleAndLoader from "./title-and-loader.component";

import { Container } from "../../styles/container/container.styles";
import SignedInCustomersBookingsTable from "./signed-in-customers-bookings-table.component";
import Metadata from "../../components/metadata/metadata.component";

const SignedInCustomersBookings = () => {
  useFetchCustomersBookingsThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Your Bookings"
        description="View Your bookings with details of dates and check in / out slots and more."
      />
      <TitleAndLoader />
      <SignedInCustomersBookingsTable />
    </Container>
  );
};

export default SignedInCustomersBookings;
