// ensure proper comparison after a page reload for example
export const formFieldsHaveNotChanged = (object, objectToCompare) => {
  return JSON.stringify(object) === JSON.stringify(objectToCompare);
};
