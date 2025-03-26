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
        content: `THE PAYMENT STATUS CELL

Before payment:

If a payment hasn’t been made yet, the status will be marked as 'incomplete'.

when you receive payment, you can change the status to “completed” by clicking the button.

_______________________

Payments Made At The Time Of The Booking:

For bookings paid at the time of booking, the “update status” button won’t appear.

The status will be automatically set to "complete".
_______________________

After Marking as Complete:
Once a payment is marked as complete 

( or the customer makes a payment via the app ), 

 the status will change to "complete" and the option to cancel is disabled to maintain accurate records and prevent accidental or fraudulent changes. 
 
 If you need to undo this status, please contact Jonathan using the link below.`,
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
