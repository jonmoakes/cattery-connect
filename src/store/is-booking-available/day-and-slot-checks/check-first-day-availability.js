import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.penCapacity < numberOfCats || pen.available === 0
  );
};

// Special check function to handle a one day booking - very rare
export const specialCheckSameDay = (
  parsedAvailabilityData,
  numberOfCats,
  failingDates
) => {
  const firstDay = parsedAvailabilityData[0];

  if (!firstDay) return failingDates; // Early return if no availability data

  const { date, morningPens, afternoonPens } = firstDay;

  const firstDayAmSlotFail = !hasSufficientCapacity(morningPens, numberOfCats);
  const firstDayPmSlotFail = !hasSufficientCapacity(
    afternoonPens,
    numberOfCats
  );

  if (firstDayAmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date,
      slot: "am",
      failedPens: checkPenCapacity(morningPens, numberOfCats),
    });
  }
  if (firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date,
      slot: "pm",
      failedPens: checkPenCapacity(afternoonPens, numberOfCats),
    });
  }

  return failingDates;
};

export const checkFirstDayAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  checkInSlot,
  failingDates
) => {
  const firstDay = parsedAvailabilityData[0];

  if (!firstDay) return failingDates; // Early return if no availability data

  const { date, morningPens, afternoonPens } = firstDay;

  const firstDayAmSlotFail = !hasSufficientCapacity(morningPens, numberOfCats);
  const firstDayPmSlotFail = !hasSufficientCapacity(
    afternoonPens,
    numberOfCats
  );

  if (checkInSlot === "am") {
    if (firstDayAmSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "am",
        failedPens: checkPenCapacity(morningPens, numberOfCats),
      });
    }
    if (firstDayPmSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date,
        slot: "pm",
        failedPens: checkPenCapacity(afternoonPens, numberOfCats),
      });
    }
  } else if (checkInSlot === "pm" && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date,
      slot: "pm",
      failedPens: checkPenCapacity(afternoonPens, numberOfCats),
    });
  }

  return failingDates;
};
