import Metadata from "../../components/metadata/metadata.component";
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
    <Metadata
      title="Cattery Connect - About"
      description="Learn about Cattery Connect, the all-in-one app for cattery owners. Manage bookings, cat details, payments, and schedules effortlessly on any device."
      ogTitle="About Cattery Connect"
      ogDescription="Discover how Cattery Connect simplifies cattery management with easy booking, customer and cat tracking, and more. Install it as a PWA on any device!"
    />
    <TitleAndIntro />
    <CustomerDetails />
    <CatDetails />
    <MakingABooking />
    <BookingsTableInfo />
    <DailyScheduleInfo />
    <PenDataInfo />
    <AboutOutro />
  </Container>
);

export default About;
