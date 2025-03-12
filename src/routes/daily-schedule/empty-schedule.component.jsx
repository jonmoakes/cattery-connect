import { format } from "date-fns";

import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";

import ProgressiveImage from "../../components/progressive-image/progressive-image.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

import image from "../../assets/empty-cattery.webp";

const EmptySchedule = () => {
  const { passedChosenDate } = useGetDailyScheduleSelectors();

  return (
    <ParentDiv>
      <CustomBalancedText type="h2" className="teal">
        looks like a quiet day on
        <br />
        {passedChosenDate
          ? format(passedChosenDate, "EEE dd MMMM yyyy")
          : format(new Date(), "EEE dd MMMM yyyy")}
        !
      </CustomBalancedText>
      <CustomBalancedText>
        there are No check in / check outs or 🐾 furry guests 🐾 today.
      </CustomBalancedText>

      <ProgressiveImage {...{ image, altText: "empty cat pen" }} />
    </ParentDiv>
  );
};

export default EmptySchedule;
