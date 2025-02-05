import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
  );
};

export const checkMiddleDaysAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  catteryAllowsLargerPensBool,
  failingDates
) => {
  const middleDays = parsedAvailabilityData.slice(1, -1);

  middleDays.forEach((day) => {
    const morningSlotFail = !hasSufficientCapacity(
      day.morningPens,
      numberOfCats,
      catteryAllowsLargerPensBool
    );

    const afternoonSlotFail = !hasSufficientCapacity(
      day.afternoonPens,
      numberOfCats,
      catteryAllowsLargerPensBool
    );

    // Check AM slot first
    if (morningSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date: day.date,
        slot: "am",
        failedPens: checkPenCapacity(day.morningPens, numberOfCats),
      });
    }
    // Check PM slot
    if (afternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date: day.date,
        slot: "pm",
        failedPens: checkPenCapacity(day.afternoonPens, numberOfCats),
      });
    }
  });

  return failingDates;
};
