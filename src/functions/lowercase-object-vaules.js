export const lowercaseObjectValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      typeof value === "string" ? value.toLowerCase() : value,
    ])
  );
};
