export const formatBookingDetailsForUpdatePenDataError = (
  uploadBookingData
) => {
  const {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = uploadBookingData;

  return `

________________________

**Cats in Booking**  

${catsInBooking.length}  

________________________

**Check-In Date & Time**  

${checkInDate} (${checkInSlot.toUpperCase()})  

________________________

**Check-Out Date & Time**  

${checkOutDate} (${checkOutSlot.toUpperCase()})  

`.trim();
};
