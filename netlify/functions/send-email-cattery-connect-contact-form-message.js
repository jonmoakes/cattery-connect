import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { senderName, senderEmail, senderMessage } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: process.env.VITE_APP_ADMIN_EMAIL,
      TemplateAlias: "send-email-cattery-connect-contact-form-message",
      TemplateModel: {
        product_url: "https://cattery-connect.netlify.app",
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
    console.log(error);
    return {
      statusCode: 500,
    };
  }
};
