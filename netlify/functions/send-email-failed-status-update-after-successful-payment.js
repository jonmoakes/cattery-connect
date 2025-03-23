import postmark from "postmark";

const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { documentIdOfBooking } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: `"Cattery Connect" <${process.env.VITE_APP_ADMIN_EMAIL}>`,
      To: process.env.VITE_APP_ADMIN_EMAIL,
      TemplateAlias: "send-email-failed-status-update-after-successful-payment",
      TemplateModel: {
        product_url: "https://www.cattery-connect.co.uk",
        product_name: "Cattery Connect",
        documentIdOfBooking,
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
