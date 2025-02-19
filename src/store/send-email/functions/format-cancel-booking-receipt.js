import { format } from "date-fns";

export const formatCancelBookingReceipt = (dataFromBooking) => {
  const {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = dataFromBooking;

  return `

________________________

**Cats in Booking**  

${catsInBooking}  
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
