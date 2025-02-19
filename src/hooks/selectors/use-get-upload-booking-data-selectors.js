import { useSelector } from "react-redux";

import { selectUploadBookingDataSelectors } from "../../store/upload-booking-data/upload-booking-data.slice";

const useGetUploadBookingDataSelectors = () => {
  const {
    uploadBookingData,
    uploadBookingDataIsLoading,
    uploadBookingDataResult,
    uploadBookingDataError,
  } = useSelector(selectUploadBookingDataSelectors);

  const {
    customerDocumentId,
    bookingId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = uploadBookingData ?? {};
  return {
    uploadBookingData,
    uploadBookingDataIsLoading,
    uploadBookingDataResult,
    uploadBookingDataError,
    customerDocumentId,
    bookingId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  };
};

export default useGetUploadBookingDataSelectors;
