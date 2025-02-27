import useChooseCatsVariables from "./choose-cats-input-hooks/use-choose-cat-variables";

import NoSelectedCustomersCatsHaveBeenAddedYet from "./no-selected-customers-cats-have-been-added-yet.component";
import ChooseCatCheckboxes from "./choose-cats-checkboxes.component";

const ChooseCatsInput = () => {
  const {
    noCustomerSelectedYet,
    customerHasBeenSelectedAndHasNoAddedCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
  } = useChooseCatsVariables();

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
