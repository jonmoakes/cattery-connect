import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useAddCatForCustomerWithNoCats from "./choose-cats-input-hooks/use-add-cat-for-customer-with-no-cats";

import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../../components/custom-span/custom-span.component";

import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../../../styles/button/button.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const NoSelectedCustomersCatsHaveBeenAddedYet = () => {
  const { customerName } = useGetDbManageAddBookingSelectors();
  const { addCatForCustomerWithNoCats } = useAddCatForCustomerWithNoCats();

  return (
    <>
      <CustomBalancedText color="white">
        no cat(<CustomSpan type="lowercase">s</CustomSpan>) have been added for{" "}
        <CustomSpan color="yellow">
          {getFirstNameFromString(customerName)}
        </CustomSpan>{" "}
        yet.
      </CustomBalancedText>
      <CustomBalancedText color="white">
        please add one by tapping the button below and then returning to this
        page once the cat(<CustomSpan type="lowercase">s</CustomSpan>) have been
        added.
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
