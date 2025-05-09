export const formatFullBookingDetails = (uploadBookingData) => {
  const {
    bookingId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerId,
    paymentStatus,
  } = uploadBookingData;

  return `

________________________

**Booking ID**

${bookingId}

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

________________________

**Payment Status**

${paymentStatus}

`.trim();
};
