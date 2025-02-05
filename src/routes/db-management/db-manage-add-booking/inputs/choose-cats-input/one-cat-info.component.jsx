import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../../components/custom-span/custom-span.component";

import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const OneCatInfo = ({ catsToRender }) => {
  const { customerName } = useGetDbManageAddBookingSelectors();

  return (
    <>
      <BlackHr />
      <CustomBalancedText color="white">
        <CustomSpan color="yellow">{catsToRender[0].catsName}</CustomSpan> is
        the only cat found for {getFirstNameFromString(customerName)}.
      </CustomBalancedText>
      <CustomBalancedText color="white">
        continue filling out the form if this is correct.
      </CustomBalancedText>
    </>
  );
};

export default OneCatInfo;
