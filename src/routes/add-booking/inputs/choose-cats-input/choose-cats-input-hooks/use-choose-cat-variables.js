import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useAddBookingVariables from "../../../add-booking-hooks/use-add-booking-variables";

const useChooseCatsVariables = () => {
  const { customerName } = useGetUploadBookingDataSelectors();
  const { customersCats } = useAddBookingVariables();
  const noCustomerSelectedYet = customerName === undefined;

  const customerHasBeenSelectedAndHasNoAddedCats =
    customerName && customersCats && customersCats.length === 0;

  const customerHasBeenSelectedAndHasAtLeastOneCat =
    customerName && customersCats && customersCats.length > 0;

  return {
    noCustomerSelectedYet,
    customerHasBeenSelectedAndHasNoAddedCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
  };
};

export default useChooseCatsVariables;
