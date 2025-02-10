export const updatePenAvailability = (
  pens,
  catteryAllowsLargerPensBool,
  numberOfCats,
  operation
) => {
  // Validate operation early on.
  if (operation !== "deduct" && operation !== "add") {
    throw new Error(
      `Unknown operation: ${operation}. Expected "deduct" or "add".`
    );
  }

  let updated = false;
  const updatedPens = pens.map((pen) => {
    if (updated) return pen; // already updated one pen for this booking

    if (catteryAllowsLargerPensBool) {
      if (pen.maxCatCapacity >= numberOfCats && pen.available > 0) {
        updated = true;
        return {
          ...pen,
          available:
            operation === "deduct" ? pen.available - 1 : pen.available + 1,
        };
      }
    } else {
      // Adjust for 1 cat: treat it as a pen with capacity 2.
      const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;
      if (pen.maxCatCapacity === adjustedNumberOfCats && pen.available > 0) {
        updated = true;
        return {
          ...pen,
          available:
            operation === "deduct" ? pen.available - 1 : pen.available + 1,
        };
      }
    }
    return pen;
  });
  return updatedPens;
};
