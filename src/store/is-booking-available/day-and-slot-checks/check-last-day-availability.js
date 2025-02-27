import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.penCapacity < numberOfCats || pen.available === 0
  );
};

export const checkLastDayAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  checkOutSlot,
  failingDates
) => {
  const lastDay = parsedAvailabilityData[parsedAvailabilityData.length - 1];

  if (!lastDay) return failingDates; // Early return if no availability data

  const { date, morningPens, afternoonPens } = lastDay;

  const lastDayMorningSlotFail = !hasSufficientCapacity(
    morningPens,
    numberOfCats
  );
  const lastDayAfternoonSlotFail = !hasSufficientCapacity(
    afternoonPens,
    numberOfCats
  );

  if (checkOutSlot === "am" && lastDayMorningSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date,
      slot: "am",
      failedPens: checkPenCapacity(morningPens, numberOfCats),
    });
  } else if (checkOutSlot === "pm") {
    if (lastDayMorningSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "am",
        failedPens: checkPenCapacity(morningPens, numberOfCats),
      });
    }
    if (lastDayAfternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "pm",
        failedPens: checkPenCapacity(afternoonPens, numberOfCats),
      });
    }
  }

  return failingDates;
};
