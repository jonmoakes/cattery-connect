export const updateSlot = (pens, numberOfCats, operation) => {
  if (operation !== "deduct" && operation !== "add") {
    throw new Error(
      `Unknown operation: ${operation}. Expected "deduct" or "add".`
    );
  }

  const adjustment = operation === "deduct" ? -1 : 1;

  // If the number of cats is 1, adjust it to 2 because 1-capacity pens do not exist
  const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

  // Find the first pen with "any" capacity or with the exact adjusted number of cats
  const penIndex = pens.findIndex(
    (pen) =>
      (pen.penCapacity === "any" && pen.available > 0) ||
      (pen.penCapacity === adjustedNumberOfCats && pen.available > 0)
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
