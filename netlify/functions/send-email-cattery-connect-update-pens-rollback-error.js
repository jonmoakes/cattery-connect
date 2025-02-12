import postmark from "postmark";
import "dotenv/config";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const {
    catteryId,
    operation,
    addBookingData,
    rollbackFailures,
    originalAvailabilityData,
  } = JSON.parse(event.body);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: process.env.VITE_APP_ADMIN_EMAIL,
      TemplateAlias: "send-email-cattery-connect-update-pens-rollback-error",
      TemplateModel: {
        product_url: "https://cattery-connect.netlify.app",
        product_name: "Cattery Connect",
        catteryId,
        operation,
        addBookingData,
        rollbackFailures,
        originalAvailabilityData,
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
