import stripe from "stripe";

exports.handler = async (event) => {
  const { catteryId, amount } = JSON.parse(event.body);

  // Retrieve the secret key dynamically (implement this securely)
  const secretKey = getSecretKeyForCattery(catteryId);

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

const getSecretKeyForCattery = (catteryId) => {
  const keys = {
    ffrt: process.env.STRIPE_SECRET_KEY_FFRT,
  };
  return keys[catteryId];
};
