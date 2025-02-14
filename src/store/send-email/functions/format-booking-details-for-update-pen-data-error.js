export const formatBookingDetailsForUpdatePenDataError = (addBookingData) => {
  const {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = addBookingData;

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
