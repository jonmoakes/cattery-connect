import { contactRoute, updateEmailRoute } from "../../strings/routes";

export const signedInCustomerDetailsAccordionData = [
  {
    id: 1,
    content: `These are the details stored securely in our database to manage your bookings and ensure we can contact you in an emergency.`,
  },
  {
    id: 2,
    content: `  If you need to update any of this information, please tap the 'Edit details' button.`,
  },
  {
    id: 3,
    content: ` Please note that changing your email address here will NOT update the email address that you use to sign into the app.`,
  },
  {
    id: 4,
    content: ` The email you update here is used for correspondence, such as sending receipts or messages related to your bookings.`,
  },
  {
    id: 5,
    content: `   If you wish to update the email address that you use to sign in, please visit the [link:update email|${updateEmailRoute}] page.`,
  },
  {
    id: 6,
    content: ` You can also [link:contact|${contactRoute}] your cattery to update any of this information if you prefer.`,
  },
  {
    id: 7,
    content: ` For security reasons, we recommend not sending sensitive details ( such as your address or emergency contact details ) via email, as email is not the most secure method of communication.`,
  },
  {
    id: 8,
    content: ` Instead, consider phoning or visiting your cattery to update these details.`,
  },
  {
    id: 9,
    content: `of course, updating your details via this app is secure, as we process and store your information safely in our database.`,
  },
];
