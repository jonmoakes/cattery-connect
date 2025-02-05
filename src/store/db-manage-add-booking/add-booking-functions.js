// // export const hasSufficientCapacity = (
// //   pens,
// //   numberOfCats,
// //   catteryAllowsLargerPensBool
// // ) => {
// //   if (catteryAllowsLargerPensBool) {
// //     // Allow larger pens, any pen with enough capacity works
// //     return pens.some(
// //       (pen) => pen.maxCatCapacity >= numberOfCats && pen.available > 0
// //     );
// //   } else {
// //     //allow larger pens is false, so wont accept any penCapacity that doesn't match the number of cats
// //     // However If there is 1 cat, treat it as though the capacity is 2 because 1 pen capacity doesn't exist in db - just 2 cats.
// //     const adjustedNumberOfCats = numberOfCats === 1 ? 2 : numberOfCats;

// //     return pens.some(
// //       (pen) => pen.maxCatCapacity === adjustedNumberOfCats && pen.available > 0
// //     );
// //   }
// // };

// export function checkFirstDayAvailability(
//   checkInSlot,
//   firstDay,
//   numberOfCats,
//   catteryAllowsLargerPensBool,
//   failingDates
// ) {
//   // Check AM and PM slots for capacity
//   const firstDayAmSlotFail = !hasSufficientCapacity(
//     firstDay.morningPens,
//     numberOfCats,
//     catteryAllowsLargerPensBool
//   );

//   const firstDayPmSlotFail = !hasSufficientCapacity(
//     firstDay.afternoonPens,
//     numberOfCats,
//     catteryAllowsLargerPensBool
//   );

//   // If AM is selected and AM fails, but PM has capacity
//   if (checkInSlot === "am" && firstDayAmSlotFail && !firstDayPmSlotFail) {
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: firstDay.date,
//       slot: "am",
//       failedPens: firstDay.morningPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//   }
//   // If AM is selected and PM fails, but AM has capacity
//   else if (checkInSlot === "am" && !firstDayAmSlotFail && firstDayPmSlotFail) {
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: firstDay.date,
//       slot: "pm",
//       failedPens: firstDay.afternoonPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//   }
//   // If both AM and PM fail for AM slot
//   else if (checkInSlot === "am" && firstDayAmSlotFail && firstDayPmSlotFail) {
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: firstDay.date,
//       slot: "am",
//       failedPens: firstDay.morningPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: firstDay.date,
//       slot: "pm",
//       failedPens: firstDay.afternoonPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//   }
//   // If PM is selected, only check the PM slot
//   else if (checkInSlot === "pm" && firstDayPmSlotFail) {
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: firstDay.date,
//       slot: "pm",
//       failedPens: firstDay.afternoonPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//   }

//   return failingDates;
// }

// export function checkLastDayAvailability(
//   checkoutSlot,
//   lastDay,
//   numberOfCats,
//   catteryAllowsLargerPensBool,
//   failingDates
// ) {
//   const lastDayMorningSlotFail = !hasSufficientCapacity(
//     lastDay.morningPens,
//     numberOfCats,
//     catteryAllowsLargerPensBool
//   );

//   const lastDayAfternoonSlotFail = !hasSufficientCapacity(
//     lastDay.afternoonPens,
//     numberOfCats,
//     catteryAllowsLargerPensBool
//   );

//   // If the checkout slot is "am" and morning pens don't have enough capacity
//   if (checkoutSlot === "am" && lastDayMorningSlotFail) {
//     failingDates.push({
//       id: crypto.randomUUID(),
//       date: lastDay.date,
//       slot: "am",
//       failedPens: lastDay.morningPens.filter(
//         (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//       ),
//     });
//   }
//   // If the checkout slot is "pm"
//   else if (checkoutSlot === "pm") {
//     // If morning pens have sufficient capacity but afternoon pens don't
//     if (!lastDayMorningSlotFail && lastDayAfternoonSlotFail) {
//       failingDates.push({
//         id: crypto.randomUUID(),
//         date: lastDay.date,
//         slot: "pm",
//         failedPens: lastDay.afternoonPens.filter(
//           (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//         ),
//       });
//     }
//     // If morning pens don't have sufficient capacity but afternoon pens do
//     else if (lastDayMorningSlotFail && !lastDayAfternoonSlotFail) {
//       failingDates.push({
//         id: crypto.randomUUID(),
//         date: lastDay.date,
//         slot: "am",
//         failedPens: lastDay.morningPens.filter(
//           (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//         ),
//       });
//     }
//     // If both morning and afternoon pens don't have sufficient capacity
//     else if (lastDayMorningSlotFail && lastDayAfternoonSlotFail) {
//       failingDates.push({
//         id: crypto.randomUUID(),
//         date: lastDay.date,
//         slot: "am",
//         failedPens: lastDay.morningPens.filter(
//           (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//         ),
//       });
//       failingDates.push({
//         id: crypto.randomUUID(),
//         date: lastDay.date,
//         slot: "pm",
//         failedPens: lastDay.afternoonPens.filter(
//           (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
//         ),
//       });
//     }
//   }

//   return failingDates;
// }
