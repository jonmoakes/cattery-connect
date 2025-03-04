import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.penCapacity < numberOfCats || pen.available === 0
  );
};

export const checkMiddleDaysAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  failingDates
) => {
  const middleDays = parsedAvailabilityData.slice(1, -1);

  if (middleDays.length === 0) return failingDates; // Early return if no middle days

  middleDays.forEach(({ date, morningPens, afternoonPens }) => {
    const morningSlotFail = !hasSufficientCapacity(morningPens, numberOfCats);
    const afternoonSlotFail = !hasSufficientCapacity(
      afternoonPens,
      numberOfCats
    );

    if (morningSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "am",
        failedPens: checkPenCapacity(morningPens, numberOfCats),
      });
    }

    if (afternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "pm",
        failedPens: checkPenCapacity(afternoonPens, numberOfCats),
      });
    }
  });

  return failingDates;
};
