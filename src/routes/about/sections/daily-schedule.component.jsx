import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import {
  schedulePickerAboutPageImage,
  scheduleDataAboutPageImage,
} from "../../../strings/image-urls";

const DailyScheduleInfo = () => (
  <>
    <BlackHr />
    <ParentDiv>
      <CustomBalancedText type="h2">daily schedule:</CustomBalancedText>
      <CustomBalancedText>
        This useful feature allows you to view all the cats currently in your
        cattery ( or on any day of your choice ) in a table.
      </CustomBalancedText>
      <CustomBalancedText>
        Each cat’s feeding and medical info is displayed, so you can easily see
        at a glance what care needs to be given.
      </CustomBalancedText>
    </ParentDiv>
    <ProgressiveImage
      {...{
        srcList: schedulePickerAboutPageImage,
        altText: "a date picker to choose a days schedule",
        className: "no-border imac",
      }}
    />
    <ParentDiv>
      <CustomBalancedText>
        By default, when you arrive on this page, you’ll see today’s data.
      </CustomBalancedText>
      <CustomBalancedText>
        You can also select another date using the date picker if you wish.
      </CustomBalancedText>
      <CustomBalancedText>
        The table shows whether cats are checking in or out ( including their
        time slots ) or are simply staying the night.
      </CustomBalancedText>
      <CustomBalancedText>
        You can update the arrival or departure status by tapping the button
        next to the booking, should you need to.
      </CustomBalancedText>
    </ParentDiv>
    <ProgressiveImage
      {...{
        srcList: scheduleDataAboutPageImage,
        altText: "data on a days schedule",
        className: "no-border imac",
      }}
    />
    <ParentDiv>
      <CustomBalancedText>
        The Daily Schedule feature ensures you never miss a detail in your
        cattery’s daily operations.
      </CustomBalancedText>
      <CustomBalancedText>
        With everything you need to know about your cats’ arrivals, departures,
        and care requirements at your fingertips, it’s an indispensable tool for
        managing your day-to-day activities efficiently.
      </CustomBalancedText>
      <CustomBalancedText>
        Whether you're checking in new arrivals or ensuring your cats are
        receiving the right care, the Daily Schedule helps streamline your
        workload and improve the overall experience for both the cats and their
        owners.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default DailyScheduleInfo;
