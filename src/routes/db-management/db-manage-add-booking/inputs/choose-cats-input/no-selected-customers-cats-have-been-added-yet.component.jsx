import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useAddCatForCustomerWithNoCats from "./choose-cats-input-hooks/use-add-cat-for-customer-with-no-cats";

import { WhiteText } from "../../../../../styles/p/p.styles";
import {
  LowercasedSpan,
  YellowSpan,
} from "../../../../../styles/span/span.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../../../styles/button/button.styles";

import { getFirstNameFromString } from "../../../../../functions/get-first-name-from-string";

const NoSelectedCustomersCatsHaveBeenAddedYet = () => {
  const { customerName } = useGetDbManageAddBookingSelectors();
  const { addCatForCustomerWithNoCats } = useAddCatForCustomerWithNoCats();

  return (
    <>
      <WhiteText>
        <Balancer>
          no cat(<LowercasedSpan>s</LowercasedSpan>) have been added for{" "}
          <YellowSpan>{getFirstNameFromString(customerName)}</YellowSpan> yet.
        </Balancer>
      </WhiteText>
      <WhiteText>
        <Balancer>
          please add one by tapping the button below and then returning to this
          page once the cat(<LowercasedSpan>s</LowercasedSpan>) have been added.
        </Balancer>
      </WhiteText>
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
