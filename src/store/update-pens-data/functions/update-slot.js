export const updateSlot = (pens, numberOfCats, operation) => {
  if (operation !== "deduct" && operation !== "add") {
    throw new Error(
      `Unknown operation: ${operation}. Expected "deduct" or "add".`
    );
  }

  const adjustment = operation === "deduct" ? -1 : 1;

  // Because whether there is 1 or 2 cats, they would both go in the same pen size
  const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

  const penIndex = pens.findIndex(
    (pen) =>
      pen.penCapacity === adjustedNumberOfCats &&
      (operation === "add" || pen.available > 0) // Allow adding even if available is 0
  );

  // If a matching pen is found, update its availability
  if (penIndex !== -1) {
    const updatedPens = [...pens];
    updatedPens[penIndex] = {
      ...updatedPens[penIndex],
      available: updatedPens[penIndex].available + adjustment,
    };

    return updatedPens;
  }

  // If no matching pen is found, return the original pens array
  return pens;
};
