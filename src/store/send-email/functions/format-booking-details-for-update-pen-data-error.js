export const formatBookingDetailsForUpdatePenDataError = (dataForEmail) => {
  const {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = dataForEmail;

  return `

________________________

**Number Of Cats in Booking**  

${catsInBooking.length}  

________________________

**Check-In Date & Time**  

${checkInDate} (${checkInSlot.toUpperCase()})  

________________________

**Check-Out Date & Time**  

${checkOutDate} (${checkOutSlot.toUpperCase()})  

`.trim();
};
