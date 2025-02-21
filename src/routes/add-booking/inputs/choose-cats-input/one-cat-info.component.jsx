import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import useGoToAddCatRouteWithCustomerData from "./choose-cats-input-hooks/use-go-to-add-cat-route-with-customer-data";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../components/custom-span/custom-span.component";

import { BlackHr } from "../../../../styles/hr/hr.styles";

import { getFirstNameFromString } from "../../../../functions/get-first-name-from-string";

const OneCatInfo = ({ catsToRender }) => {
  const { customerName } = useGetUploadBookingDataSelectors();
  const { goToAddCatRouteWithCustomerData } =
    useGoToAddCatRouteWithCustomerData();

  return (
    <>
      <BlackHr />
      <CustomBalancedText className="white">
        <CustomSpan className="yellow">{catsToRender[0].catsName}</CustomSpan>{" "}
        is the only cat found for {getFirstNameFromString(customerName)}.
      </CustomBalancedText>
      <CustomBalancedText className="white">
        continue filling out the form if this is correct or
        <br />
        <CustomSpan
          className="orange clickable"
          onClick={goToAddCatRouteWithCustomerData}
        >
          add another cat
        </CustomSpan>
        <br />
        if necessary.
      </CustomBalancedText>
    </>
  );
};

export default OneCatInfo;
