export const generateCatteryAvailabilityForDate = (
  date,
  penSpacesForMaxTwoCats,
  penSpacesForMaxThreeCats,
  penSpacesForMaxFourCats,
  penSpacesForMaxFiveCats
) => {
  const morningPensData = JSON.stringify([
    { maxCatCapacity: 2, available: Number(penSpacesForMaxTwoCats) },
    { maxCatCapacity: 3, available: Number(penSpacesForMaxThreeCats) },
    { maxCatCapacity: 4, available: Number(penSpacesForMaxFourCats) },
    { maxCatCapacity: 5, available: Number(penSpacesForMaxFiveCats) },
  ]);

  const afternoonPensData = JSON.stringify([
    { maxCatCapacity: 2, available: Number(penSpacesForMaxTwoCats) },
    { maxCatCapacity: 3, available: Number(penSpacesForMaxThreeCats) },
    { maxCatCapacity: 4, available: Number(penSpacesForMaxFourCats) },
    { maxCatCapacity: 5, available: Number(penSpacesForMaxFiveCats) },
  ]);

  return {
    date,
    morningPensData,
    afternoonPensData,
  };
};
