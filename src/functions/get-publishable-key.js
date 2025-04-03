export const getPublishableKey = (catteryId) => {
  const publishableKeyEnvVar = `VITE_STRIPE_PUBLISHABLE_KEY_${catteryId.toUpperCase()}`;
  const publicKey = import.meta.env[publishableKeyEnvVar];

  return publicKey;
};
