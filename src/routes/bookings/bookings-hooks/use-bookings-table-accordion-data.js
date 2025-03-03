import { useLocation } from "react-router-dom";

import { defaultTableAccordionData } from "../../../components/tables/default-table-accordion-data";

const useBookingsTableAccordionData = () => {
  const location = useLocation();
  const path = location.pathname;

  const extraBookingsTableTableHelpData = {
    "/bookings": [
      {
        id: 4,
        content: `in the 'payment status' column, if a payment hasn't been made yet, there is a button where you can change its status to 'completed' when you have received the payment.
    
    if a payment has been marked as complete when you made the booking, this button shall not appear by default.
    
    however, you can make it appear ( if you have made a mistake by saying a payment was completed when it wasn't for example ), by tapping on the text that says 'complete'.
    
    this will then show the button which when clicked, allows you to change the status to incomplete.`,
      },
    ],
  };

  const additionalHelpData = extraBookingsTableTableHelpData[path] || [];

  // Merge default table help with page-specific help
  const bookingsTableAccordionData = [
    ...defaultTableAccordionData,
    ...additionalHelpData,
  ];

  return { bookingsTableAccordionData };
};

export default useBookingsTableAccordionData;
