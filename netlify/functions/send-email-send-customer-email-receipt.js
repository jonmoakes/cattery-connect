import postmark from "postmark";

const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    customerEmail,
    customerName,
    name,
    formattedFullBookingDetails,
    costOfStayPounds,
    phone,
    catteryEmail,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: `"Cattery Connect" <${process.env.VITE_APP_ADMIN_EMAIL}>`,
      To: customerEmail,
      TemplateAlias: "send-email-send-customer-email-receipt",
      TemplateModel: {
        product_url: "https://www.cattery-connect.co.uk",
        product_name: "Cattery Connect",
        customerName,
        name,
        formattedFullBookingDetails,
        costOfStayPounds,
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
