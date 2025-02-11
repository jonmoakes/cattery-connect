export const generateCatteryAvailabilityForDate = (
  date,
  penSpacesForMaxTwoCats,
  penSpacesForMaxThreeCats,
  penSpacesForMaxFourCats,
  penSpacesForMaxFiveCats
) => {
  // Build an array of pens where capacity 2 is always included,
  // and capacities 3, 4, and 5 are included only if they’re greater than 0.
  const buildPens = () => [
    { maxCatCapacity: 2, available: Number(penSpacesForMaxTwoCats) },
    ...(Number(penSpacesForMaxThreeCats) > 0
      ? [{ maxCatCapacity: 3, available: Number(penSpacesForMaxThreeCats) }]
      : []),
    ...(Number(penSpacesForMaxFourCats) > 0
      ? [{ maxCatCapacity: 4, available: Number(penSpacesForMaxFourCats) }]
      : []),
    ...(Number(penSpacesForMaxFiveCats) > 0
      ? [{ maxCatCapacity: 5, available: Number(penSpacesForMaxFiveCats) }]
      : []),
  ];

  const morningPensData = JSON.stringify(buildPens());
  const afternoonPensData = JSON.stringify(buildPens());

  return {
    date,
    morningPensData,
    afternoonPensData,
  };
};
