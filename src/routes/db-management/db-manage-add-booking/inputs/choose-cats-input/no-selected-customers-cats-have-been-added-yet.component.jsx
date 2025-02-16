import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useAddCatForCustomerWithNoCats from "./choose-cats-input-hooks/use-add-cat-for-customer-with-no-cats";

import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../../components/custom-span/custom-span.component";

import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../../../styles/button/button.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const NoSelectedCustomersCatsHaveBeenAddedYet = () => {
  const { customerName } = useGetUploadBookingDataSelectors();
  const { addCatForCustomerWithNoCats } = useAddCatForCustomerWithNoCats();

  return (
    <>
      <CustomBalancedText className="white">
        no cat(<CustomSpan type="lowercase">s</CustomSpan>) have been added for{" "}
        <CustomSpan className="yellow">
          {getFirstNameFromString(customerName)}
        </CustomSpan>{" "}
        yet.
      </CustomBalancedText>
      <CustomBalancedText className="white">
        please add at least one cat by tapping the button below and then
        returning to this page once the cat has been added.
      </CustomBalancedText>
      <BlackHr />

      <MinimalButton
        className="margin"
        type="button"
        onClick={addCatForCustomerWithNoCats}
      >
        add a cat
      </MinimalButton>
    </>
  );
};

export default NoSelectedCustomersCatsHaveBeenAddedYet;
