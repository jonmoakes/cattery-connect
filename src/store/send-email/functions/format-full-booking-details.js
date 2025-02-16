export const formatFullBookingDetails = (uploadBookingData) => {
  const {
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerId,
  } = uploadBookingData;

  return `

________________________

**Customer Name**

${customerName}

________________________

**Customer ID**

${customerId}

________________________

**Cats in Booking**  

${catsInBooking.join(", ")}  

________________________

**Check-In Date & Time**  

${checkInDate} (${checkInSlot})  

________________________

**Check-Out Date & Time**  

${checkOutDate} (${checkOutSlot})  

`.trim();
};
