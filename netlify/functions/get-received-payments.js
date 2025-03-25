import stripe from "stripe";

export async function handler(event) {
  const { catteryId, limit = 100, monthOffset = 0 } = JSON.parse(event.body);

  const getSecretKeyFromEnv = `STRIPE_SECRET_KEY_${catteryId.toUpperCase()}`;
  const secretKey = process.env[getSecretKeyFromEnv];

  try {
    const stripeInstance = stripe(secretKey);
    let allPayments = [];
    let hasMore = true;
    let startingAfter = null;

    const today = new Date();
    const targetMonth = new Date(
      today.getFullYear(),
      today.getMonth() + monthOffset,
      1
    );

    const firstDayOfMonthTimestamp = Math.floor(targetMonth.getTime() / 1000);
    const lastDayOfMonth = new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth() + 1,
      0
    );
    const lastDayOfMonthTimestamp = Math.floor(lastDayOfMonth.getTime() / 1000);

    while (hasMore && allPayments.length < limit) {
      const response = await stripeInstance.charges.list({
        limit: Math.min(500, limit - allPayments.length),
        ...(startingAfter ? { starting_after: startingAfter } : {}),
        created: {
          gte: firstDayOfMonthTimestamp,
          lte: lastDayOfMonthTimestamp,
        },
      });

      allPayments = allPayments.concat(response.data);
      hasMore = response.has_more;

      if (hasMore) {
        startingAfter = response.data[response.data.length - 1].id;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(allPayments),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
