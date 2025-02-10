import { updatePenAvailability } from "./update-pen-availability";

// Helper: update a given pen array based on the provided parameters.
export const updateSlot = (
  pens,
  catteryAllowsLargerPensBool,
  numberOfCats,
  operation
) =>
  updatePenAvailability(
    pens,
    catteryAllowsLargerPensBool,
    numberOfCats,
    operation
  );
