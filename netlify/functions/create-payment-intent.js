// import stripe from "stripe";

// exports.handler = async (event) => {
//   const { catteryId, amount, email } = JSON.parse(event.body);

//   const getSecretKeyFromEnv = `STRIPE_SECRET_KEY_${catteryId.toUpperCase()}`;

//   const secretKey = process.env[getSecretKeyFromEnv];

//   if (!secretKey) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error: "Invalid cattery ID" }),
//     };
//   }

//   try {
//     const stripeInstance = stripe(secretKey);
//     const paymentIntent = await stripeInstance.paymentIntents.create({
//       amount,
//       currency: "gbp",
//       receipt_email: email,
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };

import stripe from "stripe";

export const handler = async (event) => {
  const { catteryId, amount, email } = JSON.parse(event.body);

  const getSecretKeyFromEnv = `STRIPE_SECRET_KEY_${catteryId.toUpperCase()}`;
  const secretKey = process.env[getSecretKeyFromEnv];

  if (!secretKey) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid cattery ID" }),
    };
  }

  try {
    const stripeInstance = stripe(secretKey);
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "gbp",
      receipt_email: email,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
