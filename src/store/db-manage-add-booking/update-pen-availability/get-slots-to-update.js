// Helper: determine which slots to update for a given day index.
export const getSlotsToUpdate = (
  index,
  totalDays,
  checkInSlot,
  checkOutSlot
) => {
  // For a single-day booking, update both slots.
  if (totalDays === 1) {
    return { shouldUpdateMorning: true, shouldUpdateAfternoon: true };
  }

  // First day: use check-in slot logic.
  if (index === 0) {
    if (checkInSlot === "am") {
      return { shouldUpdateMorning: true, shouldUpdateAfternoon: true };
    } else if (checkInSlot === "pm") {
      return { shouldUpdateMorning: false, shouldUpdateAfternoon: true };
    }
  }
  // Last day: use check-out slot logic.
  else if (index === totalDays - 1) {
    if (checkOutSlot === "am") {
      return { shouldUpdateMorning: true, shouldUpdateAfternoon: false };
    } else if (checkOutSlot === "pm") {
      return { shouldUpdateMorning: true, shouldUpdateAfternoon: true };
    }
  }
  // Intermediate days: update both slots.
  return { shouldUpdateMorning: true, shouldUpdateAfternoon: true };
};
