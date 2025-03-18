import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { sendTo, senderName, senderEmail, senderMessage } = JSON.parse(
    event.body
  );

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: sendTo,
      TemplateAlias: "send-email-cattery-connect-contact-form-message",
      TemplateModel: {
        product_url: "https://www.cattery-connect.co.uk",
        product_name: "Cattery Connect",
        senderName,
        senderEmail,
        senderMessage,
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
