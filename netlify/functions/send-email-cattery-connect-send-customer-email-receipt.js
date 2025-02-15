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
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: customerEmail,
      TemplateAlias: "send-email-cattery-connect-send-customer-email-receipt",
      TemplateModel: {
        product_url: "https://cattery-connect.netlify.app",
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
    console.log(error);
    return {
      statusCode: 500,
    };
  }
};
