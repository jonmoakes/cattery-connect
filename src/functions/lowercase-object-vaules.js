export const lowercaseObjectValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      key === "catsId" || key === "customerId" || typeof value !== "string"
        ? value
        : value.toLowerCase(),
    ])
  );
};
