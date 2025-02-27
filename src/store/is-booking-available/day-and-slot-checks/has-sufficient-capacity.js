export const hasSufficientCapacity = (pens, numberOfCats) => {
  //If there is 1 cat, treat it as though the capacity is 2 because 1 pen capacity doesn't exist in db - just 2 cats.
  const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

  return pens.some(
    (pen) => pen.penCapacity === adjustedNumberOfCats && pen.available > 0
  );
};
