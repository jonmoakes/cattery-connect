export const hasSufficientCapacity = (
  pens,
  numberOfCats,
  catteryAllowsLargerPensBool
) => {
  if (catteryAllowsLargerPensBool) {
    // Allow larger pens, any pen with enough capacity works
    return pens.some(
      (pen) => pen.maxCatCapacity >= numberOfCats && pen.available > 0
    );
  } else {
    //allow larger pens is false, so wont accept any penCapacity that doesn't match the number of cats
    // However If there is 1 cat, treat it as though the capacity is 2 because 1 pen capacity doesn't exist in db - just 2 cats.
    const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

    return pens.some(
      (pen) => pen.maxCatCapacity === adjustedNumberOfCats && pen.available > 0
    );
  }
};
