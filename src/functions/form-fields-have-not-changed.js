export const formFieldsHaveNotChanged = (object, objectToCompare) => {
  return Object.keys(object).every(
    (key) => object[key] === objectToCompare[key]
  );
};
