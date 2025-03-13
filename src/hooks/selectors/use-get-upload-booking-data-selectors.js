import { useSelector } from "react-redux";

import { selectUploadBookingDataSelectors } from "../../store/upload-booking-data/selectors";
import { selectIndividualCustomersCatsSelectors } from "../../store/get-individual-customers-cats/selectors";

const useGetUploadBookingDataSelectors = () => {
  let { uploadBookingData } = useSelector(selectUploadBookingDataSelectors);
  const {
    uploadBookingDataIsLoading,
    uploadBookingDataResult,
    uploadBookingDataError,
  } = useSelector(selectUploadBookingDataSelectors);
  const { individualCustomersCats } = useSelector(
    selectIndividualCustomersCatsSelectors
  );

  const {
    customerDocumentId,
    customerId,

    bookingId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  } = uploadBookingData ?? {};

  // this handles an issue where if a customer only has one cat, as it is not set in the handleCustomerChange function
  //when a customer is selected. if customer only has one cat, it sets the only catsName that will be available.
  // if more than one cat, catsInBooking is undefined and then will be updated as the customer selects their cats.
  const getUpdatedBookingData = () => {
    if (individualCustomersCats && individualCustomersCats.length > 1) {
      return uploadBookingData;
    } else if (
      individualCustomersCats &&
      individualCustomersCats.length === 1
    ) {
      return {
        ...uploadBookingData,
        catsInBooking: [individualCustomersCats[0].catsName], // Needs to be an array for the thunk - it is a string by default here.
      };
    }
  };

  uploadBookingData = getUpdatedBookingData();

  return {
    uploadBookingData,
    uploadBookingDataIsLoading,
    uploadBookingDataResult,
    uploadBookingDataError,
    customerDocumentId,
    bookingId,
    customerId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  };
};

export default useGetUploadBookingDataSelectors;
