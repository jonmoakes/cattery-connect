import TitleAndIntro from "./sections/title-and-intro.component";
import CustomerDetails from "./sections/customer-details.component";
import CatDetails from "./sections/cat-details.component";
import MakingABooking from "./sections/making-a-booking.component";
import BookingsTableInfo from "./sections/bookings-table-info.component";
import DailyScheduleInfo from "./sections/daily-schedule.component";
import PenDataInfo from "./sections/pen-data-info.component";
import AboutOutro from "./sections/about-outro.component";

import { Container } from "../../styles/container/container.styles";

const About = () => (
  <Container>
    <TitleAndIntro />
    <CustomerDetails />
    <CatDetails />
    <MakingABooking />
    <BookingsTableInfo />
    <DailyScheduleInfo />
    <PenDataInfo />
    <AboutOutro />å
  </Container>
);

export default About;
