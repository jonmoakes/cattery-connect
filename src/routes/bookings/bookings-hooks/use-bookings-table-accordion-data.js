import { useLocation } from "react-router-dom";

import { defaultTableAccordionData } from "../../../components/tables/default-table-accordion-data";

const useBookingsTableAccordionData = () => {
  const location = useLocation();
  const path = location.pathname;

  const extraBookingsTableTableHelpData = {
    "/bookings": [
      {
        id: 4,
        content: `____________________________

        SEARCHING FOR A DAY:

to search for a day, please search for just the first 3 letters of the day ( ie 'tue' instead of 'tuesday' or 'mon' instead of 'monday' ).

to search for a month, please search for just the first 3 letters of the months name ( ie 'nov' instead of 'november' or its numerical value ( 11 ) ).

        ____________________________

        SEARCHING FOR A DATE AND MONTH:

 if you're searching for a date and month, for example September 12th or october 1st, please search for 'sep 12' or 'oct 01' etc.

you don't need to type the 'th' ie the 20th as this will not show up any results, even though you may have a booking on that date. this is due to how dates are stored in the database.      

        ____________________________

        SEARCHING FOR A FULL DATE:

 a full date would be for example thu sep 04 2025  or tue oct 28 2025.

        ____________________________
`,
      },
      {
        id: 5,
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
