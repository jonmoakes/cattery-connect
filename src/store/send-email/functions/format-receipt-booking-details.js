import { format } from "date-fns";

export const formatReceiptBookingDetails = (uploadBookingData) => {
  const {
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  } = uploadBookingData;

  const payStatus =
    paymentStatus === "complete"
      ? "😺 paid with thanks! 😺"
      : `due on ${format(checkOutDate, "EEE dd MMMM yyyy")}`;

  return `

________________________

**Booking ID**

${bookingId}
________________________

**Cats in Booking**  

${catsInBooking.join(", ")}  
________________________

**Check-In Date & Time**  

${format(checkInDate, "EEE dd MMMM yyyy")} 
(${checkInSlot.toUpperCase()})  
________________________

**Check-Out Date & Time**  

${format(checkOutDate, "EEE dd MMMM yyyy")} 
(${checkOutSlot.toUpperCase()})  

________________________

**Payment Status**

${payStatus}

________________________
`.trim();
};
