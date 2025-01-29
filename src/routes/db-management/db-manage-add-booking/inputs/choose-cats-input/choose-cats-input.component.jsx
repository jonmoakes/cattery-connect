import useCustomersCatsLogic from "../../db-manage-add-booking-hooks/use-customers-cats-logic";

import CatsParsingError from "./cats-parsing-error.component";
import NoSelectedCustomersCatsHaveBeenAddedYet from "./no-selected-customers-cats-have-been-added-yet.component";
import ChooseCatCheckboxes from "./choose-cats-checkboxes.component";

const ChooseCatsInput = () => {
  const {
    noCustomerSelectedYet,
    customerSelectedThenDefaultValueSelected,
    customerHasBeenSelectedAndErrorParsingCats,
    customerHasBeenSelectedAndHasNoCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
  } = useCustomersCatsLogic();

  return (
    <>
      {noCustomerSelectedYet ||
      customerSelectedThenDefaultValueSelected ? null : customerHasBeenSelectedAndErrorParsingCats ? (
        <CatsParsingError />
      ) : customerHasBeenSelectedAndHasNoCats ? (
        <NoSelectedCustomersCatsHaveBeenAddedYet />
      ) : customerHasBeenSelectedAndHasAtLeastOneCat ? (
        <ChooseCatCheckboxes />
      ) : null}
    </>
  );
};

export default ChooseCatsInput;
