import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useGoToAddCatRouteWithCustomerData from "./choose-cats-input-hooks/use-go-to-add-cat-route-with-customer-data";

import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../../components/custom-span/custom-span.component";

import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { OrangeSpan } from "../../../../../styles/span/span.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const OneCatInfo = ({ catsToRender }) => {
  const { customerName } = useGetDbManageAddBookingSelectors();
  const { goToAddCatRouteWithCustomerData } =
    useGoToAddCatRouteWithCustomerData();

  return (
    <>
      <BlackHr />
      <CustomBalancedText color="white">
        <CustomSpan color="yellow">{catsToRender[0].catsName}</CustomSpan> is
        the only cat found for {getFirstNameFromString(customerName)}.
      </CustomBalancedText>
      <CustomBalancedText color="white">
        continue filling out the form if this is correct or{" "}
        <OrangeSpan onClick={goToAddCatRouteWithCustomerData}>
          add another cat
        </OrangeSpan>{" "}
        if necessary.
      </CustomBalancedText>
    </>
  );
};

export default OneCatInfo;
