export const generateCatteryAvailabilityForDate = (
  date,
  catteryId,
  penSpacesForMaxTwoCats,
  penSpacesForMaxThreeCats,
  penSpacesForMaxFourCats,
  penSpacesForMaxFiveCats
) => {
  const morningPensData = JSON.stringify([
    { maxCatCapacity: 2, available: penSpacesForMaxTwoCats },
    { maxCatCapacity: 3, available: penSpacesForMaxThreeCats },
    { maxCatCapacity: 4, available: penSpacesForMaxFourCats },
    { maxCatCapacity: 5, available: penSpacesForMaxFiveCats },
  ]);

  const afternoonPensData = JSON.stringify([
    { maxCatCapacity: 2, available: penSpacesForMaxTwoCats },
    { maxCatCapacity: 3, available: penSpacesForMaxThreeCats },
    { maxCatCapacity: 4, available: penSpacesForMaxFourCats },
    { maxCatCapacity: 5, available: penSpacesForMaxFiveCats },
  ]);

  return {
    date,
    catteryId,
    morningPensData,
    afternoonPensData,
  };
};
