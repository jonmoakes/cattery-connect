import useAddBookingVariables from "../../add-booking-hooks/use-add-booking-variables";

import NoSelectedCustomersCatsHaveBeenAddedYet from "./no-selected-customers-cats-have-been-added-yet.component";
import ChooseCatCheckboxes from "./choose-cats-checkboxes.component";

const ChooseCatsInput = () => {
  const {
    noCustomerSelectedYet,
    customerHasBeenSelectedAndHasNoAddedCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
  } = useAddBookingVariables();

  return (
    <>
      {noCustomerSelectedYet ? null : customerHasBeenSelectedAndHasNoAddedCats ? (
        <NoSelectedCustomersCatsHaveBeenAddedYet />
      ) : customerHasBeenSelectedAndHasAtLeastOneCat ? (
        <ChooseCatCheckboxes />
      ) : null}
    </>
  );
};

export default ChooseCatsInput;
