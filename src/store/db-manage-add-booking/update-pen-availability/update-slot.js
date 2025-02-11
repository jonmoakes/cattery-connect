// // Helper: update a given pen array based on the provided parameters.
// export const updateSlot = (
//   pens,
//   catteryAllowsLargerPensBool,
//   numberOfCats,
//   operation
// ) => {
//   // Validate operation early on.
//   if (operation !== "deduct" && operation !== "add") {
//     throw new Error(
//       `Unknown operation: ${operation}. Expected "deduct" or "add".`
//     );
//   }

//   let updated = false;
//   const updatedPens = pens.map((pen) => {
//     if (updated) return pen; // already updated one pen for this booking

//     if (catteryAllowsLargerPensBool) {
//       if (pen.maxCatCapacity >= numberOfCats && pen.available > 0) {
//         updated = true;
//         return {
//           ...pen,
//           available:
//             operation === "deduct" ? pen.available - 1 : pen.available + 1,
//         };
//       }
//     } else {
//       // Adjust for 1 cat: treat it as a pen with capacity 2.
//       const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;
//       if (pen.maxCatCapacity === adjustedNumberOfCats && pen.available > 0) {
//         updated = true;
//         return {
//           ...pen,
//           available:
//             operation === "deduct" ? pen.available - 1 : pen.available + 1,
//         };
//       }
//     }
//     return pen;
//   });
//   return updatedPens;
// };

export const updateSlot = (
  pens,
  catteryAllowsLargerPensBool,
  numberOfCats,
  operation
) => {
  // Validate operation early on.
  if (operation !== "deduct" && operation !== "add") {
    throw new Error(
      `Unknown operation: ${operation}. Expected "deduct" or "add".`
    );
  }

  // Determine the adjustment factor based on the operation
  const adjustment = operation === "deduct" ? -1 : 1;

  // Adjust for 1 cat: treat it as a pen with capacity 2 if needed
  const adjustedNumberOfCats =
    !catteryAllowsLargerPensBool && numberOfCats === 1 ? 2 : numberOfCats;

  // Find the index of the first pen that matches the criteria
  const penIndex = pens.findIndex(
    (pen) => pen.maxCatCapacity >= adjustedNumberOfCats && pen.available > 0
  );

  // If a matching pen is found, update its availability
  if (penIndex !== -1) {
    const updatedPens = [...pens];
    updatedPens[penIndex] = {
      ...updatedPens[penIndex],
      available: updatedPens[penIndex].available + adjustment,
    };
    return updatedPens;
  }

  // If no matching pen is found, return the original pens array
  return pens;
};
