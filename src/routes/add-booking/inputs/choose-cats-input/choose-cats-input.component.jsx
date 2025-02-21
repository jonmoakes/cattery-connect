import useAddBookingVariables from "../../add-booking-hooks/use-add-booking-variables";

import CatsParsingError from "./cats-parsing-error.component";
import NoSelectedCustomersCatsHaveBeenAddedYet from "./no-selected-customers-cats-have-been-added-yet.component";
import ChooseCatCheckboxes from "./choose-cats-checkboxes.component";

const ChooseCatsInput = () => {
  const {
    noCustomerSelectedYet,
    customerSelectedThenDefaultValueSelected,
    customerHasBeenSelectedAndErrorParsingCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
  } = useAddBookingVariables();

  return (
    <>
      {noCustomerSelectedYet ||
      customerSelectedThenDefaultValueSelected ? null : customerHasBeenSelectedAndErrorParsingCats ? (
        <CatsParsingError />
      ) : !customerHasBeenSelectedAndHasAtLeastOneCat ? (
        <NoSelectedCustomersCatsHaveBeenAddedYet />
      ) : customerHasBeenSelectedAndHasAtLeastOneCat ? (
        <ChooseCatCheckboxes />
      ) : null}
    </>
  );
};

export default ChooseCatsInput;
