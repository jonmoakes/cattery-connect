import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
  );
};

// Special check function to handle a one day booking - very rare
export const specialCheckSameDay = (
  parsedAvailabilityData,
  numberOfCats,
  catteryAllowsLargerPensBool,
  failingDates
) => {
  const firstDay = parsedAvailabilityData[0];

  const firstDayAmSlotFail = !hasSufficientCapacity(
    firstDay.morningPens,
    numberOfCats,
    catteryAllowsLargerPensBool
  );

  const firstDayPmSlotFail = !hasSufficientCapacity(
    firstDay.afternoonPens,
    numberOfCats,
    catteryAllowsLargerPensBool
  );

  if (firstDayAmSlotFail && !firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "am",
      failedPens: checkPenCapacity(firstDay.morningPens, numberOfCats),
    });
  }

  if (!firstDayAmSlotFail && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "pm",
      failedPens: checkPenCapacity(firstDay.afternoonPens, numberOfCats),
    });
  } else if (firstDayAmSlotFail && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "am",
      failedPens: checkPenCapacity(firstDay.morningPens, numberOfCats),
    });
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "pm",
      failedPens: checkPenCapacity(firstDay.afternoonPens, numberOfCats),
    });
  }

  return failingDates;
};

export const checkFirstDayAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  catteryAllowsLargerPensBool,
  checkInSlot,
  failingDates
) => {
  const firstDay = parsedAvailabilityData[0];

  // Check AM and PM slots for capacity
  const firstDayAmSlotFail = !hasSufficientCapacity(
    firstDay.morningPens,
    numberOfCats,
    catteryAllowsLargerPensBool
  );

  const firstDayPmSlotFail = !hasSufficientCapacity(
    firstDay.afternoonPens,
    numberOfCats,
    catteryAllowsLargerPensBool
  );

  // If AM is selected and AM fails, but PM has capacity
  if (checkInSlot === "am" && firstDayAmSlotFail && !firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "am",
      failedPens: checkPenCapacity(firstDay.morningPens, numberOfCats),
    });
  }
  // If AM is selected and PM fails, but AM has capacity
  else if (checkInSlot === "am" && !firstDayAmSlotFail && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "pm",
      failedPens: checkPenCapacity(firstDay.afternoonPens, numberOfCats),
    });
  }
  // If both AM and PM fail for AM slot
  else if (checkInSlot === "am" && firstDayAmSlotFail && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "am",
      failedPens: checkPenCapacity(firstDay.morningPens, numberOfCats),
    });
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "pm",
      failedPens: checkPenCapacity(firstDay.afternoonPens, numberOfCats),
    });
  }
  // If PM is selected, only check the PM slot
  else if (checkInSlot === "pm" && firstDayPmSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: firstDay.date,
      slot: "pm",
      failedPens: checkPenCapacity(firstDay.afternoonPens, numberOfCats),
    });
  }

  return failingDates;
};
