import { hasSufficientCapacity } from "./has-sufficient-capacity";

// Helper function to filter pens with insufficient capacity
const checkPenCapacity = (penData, numberOfCats) => {
  return penData.filter(
    (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
  );
};

export const checkLastDayAvailability = (
  parsedAvailabilityData,
  numberOfCats,
  checkOutSlot,
  failingDates
) => {
  const lastDay = parsedAvailabilityData[parsedAvailabilityData.length - 1];

  const lastDayMorningSlotFail = !hasSufficientCapacity(
    lastDay.morningPens,
    numberOfCats
  );

  const lastDayAfternoonSlotFail = !hasSufficientCapacity(
    lastDay.afternoonPens,
    numberOfCats
  );

  // If the checkout slot is "am" and morning pens don't have enough capacity
  if (checkOutSlot === "am" && lastDayMorningSlotFail) {
    failingDates.push({
      id: crypto.randomUUID(),
      date: lastDay.date,
      slot: "am",
      failedPens: checkPenCapacity(lastDay.morningPens, numberOfCats),
    });
  }
  // If the checkout slot is "pm"
  else if (checkOutSlot === "pm") {
    // If morning pens have sufficient capacity but afternoon pens don't
    if (!lastDayMorningSlotFail && lastDayAfternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date: lastDay.date,
        slot: "pm",
        failedPens: checkPenCapacity(lastDay.afternoonPens, numberOfCats),
      });
    }
    // If morning pens don't have sufficient capacity but afternoon pens do
    else if (lastDayMorningSlotFail && !lastDayAfternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date: lastDay.date,
        slot: "am",
        failedPens: checkPenCapacity(lastDay.morningPens, numberOfCats),
      });
    }
    // If both morning and afternoon pens don't have sufficient capacity
    else if (lastDayMorningSlotFail && lastDayAfternoonSlotFail) {
      failingDates.push({
        id: crypto.randomUUID(),
        date: lastDay.date,
        slot: "am",
        failedPens: checkPenCapacity(lastDay.morningPens, numberOfCats),
      });
      failingDates.push({
        id: crypto.randomUUID(),
        date: lastDay.date,
        slot: "pm",
        failedPens: checkPenCapacity(lastDay.afternoonPens, numberOfCats),
      });
    }
  }

  return failingDates;
};
