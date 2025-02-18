export const updateSlot = (pens, numberOfCats, operation) => {
  // Validate operation early on.
  if (operation !== "deduct" && operation !== "add") {
    throw new Error(
      `Unknown operation: ${operation}. Expected "deduct" or "add".`
    );
  }

  // Determine the adjustment factor based on the operation
  const adjustment = operation === "deduct" ? -1 : 1;

  // Because Whether there is 1 or 2 cats they would both go in the same pen size
  const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

  // Find the index of the first pen that matches the criteria
  const penIndex = pens.findIndex(
    (pen) => pen.maxCatCapacity >= adjustedNumberOfCats && pen.available > 0
  );

  // If a matching pen is found, update its availability
  // final calc if operation is deduct, it is in effect doing number + ( -1 )
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
