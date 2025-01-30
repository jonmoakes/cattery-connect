import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

const useConfirmAddBooking = () => {
  const {
    customerDocumentId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = useGetDbManageAddBookingSelectors();

  const shouldShowBookingButton =
    customerDocumentId &&
    customerName &&
    catsInBooking &&
    checkInDate &&
    checkInSlot &&
    checkOutDate &&
    checkOutSlot &&
    true;

  const confirmAddBooking = (event) => {
    event.preventDefault();
    console.log("test");
  };

  return { shouldShowBookingButton, confirmAddBooking };
};

export default useConfirmAddBooking;
