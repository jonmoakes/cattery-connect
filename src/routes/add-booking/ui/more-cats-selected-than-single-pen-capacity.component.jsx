import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useAddBookingVariables from "../add-booking-hooks/use-add-booking-variables";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";

import { ErrorDiv } from "../../../styles/div/div.styles";

const MoreCatsSelectedThanSinglePenCapacity = () => {
  const { maximumCatsInSinglePen } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { numberOfCatsInBooking } = useAddBookingVariables();

  return (
    <ErrorDiv className="red">
      <CustomBalancedText className="white">
        sorry, you have more selected cats ({" "}
        <CustomSpan className="yellow">{numberOfCatsInBooking}</CustomSpan> )
        than you have capacity in a single pen (
        <CustomSpan className="yellow">{maximumCatsInSinglePen}</CustomSpan>) .
      </CustomBalancedText>
      <CustomBalancedText className="white">
        To accommodate all your cats comfortably, please consider making
        multiple bookings.
      </CustomBalancedText>
      <CustomBalancedText className="white">
        This approach ensures that each pen is utilised within its capacity.
      </CustomBalancedText>
    </ErrorDiv>
  );
};

export default MoreCatsSelectedThanSinglePenCapacity;
