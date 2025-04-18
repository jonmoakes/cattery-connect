import postmark from "postmark";

const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    catteryName,
    customerEmail,
    customerName,
    bookingId,
    formattedCancelledBookingDetails,
    phone,
    catteryEmail,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: `"${catteryName}" <${process.env.VITE_APP_ADMIN_EMAIL}>`,
      To: customerEmail,
      TemplateAlias: "send-email-cancel-booking-receipt",
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
    console.error("Postmark Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message, stack: error.stack }),
    };
  }
};
