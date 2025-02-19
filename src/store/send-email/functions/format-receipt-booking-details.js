import { format } from "date-fns";

export const formatReceiptBookingDetails = (uploadBookingData) => {
  const {
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = uploadBookingData;

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


`.trim();
};
