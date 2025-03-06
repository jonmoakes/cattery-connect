import postmark from "postmark";

const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    customerEmail,
    customerName,
    catteryName,
    bookingId,
    formattedCancelledBookingDetails,
    phone,
    catteryEmail,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: customerEmail,
      TemplateAlias: "send-email-cattery-connect-cancel-booking-receipt",
      TemplateModel: {
        product_url: "https://www.cattery-connect.co.uk",
        product_name: "Cattery Connect",
        customerEmail,
        customerName,
        catteryName,
        bookingId,
        formattedCancelledBookingDetails,
        phone,
        catteryEmail,
      },
    });

    return {
      statusCode: 202,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
    };
  }
};
