export const hasSufficientCapacity = (pens, numberOfCats) => {
  // Check if an "any" capacity pen exists and is available
  const anyCapacityPenExists = pens.some(
    (pen) => pen.penCapacity === "any" && pen.available > 0
  );

  // If an "any" capacity pen exists, return true immediately
  if (anyCapacityPenExists) return true;

  // If there is 1 cat, treat it as though the capacity is 2
  const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;
  // Otherwise, check for a specific pen with the exact capacity
  return pens.some(
    (pen) => pen.penCapacity === adjustedNumberOfCats && pen.available > 0
  );
};
