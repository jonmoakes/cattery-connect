export const generateCatteryAvailabilityForDate = (
  date,
  penSpacesForAnyNumberOfCats,
  penSpacesForMaxTwoCats,
  penSpacesForMaxThreeCats,
  penSpacesForMaxFourCats,
  penSpacesForMaxFiveCats
) => {
  // Build an array of pens where all capacities are included only if greater than 0.
  const buildPens = () => [
    ...(Number(penSpacesForAnyNumberOfCats) > 0
      ? [{ penCapacity: "any", available: Number(penSpacesForAnyNumberOfCats) }]
      : []),
    ...(Number(penSpacesForMaxTwoCats) > 0
      ? [{ penCapacity: 2, available: Number(penSpacesForMaxTwoCats) }]
      : []),
    ...(Number(penSpacesForMaxThreeCats) > 0
      ? [{ penCapacity: 3, available: Number(penSpacesForMaxThreeCats) }]
      : []),
    ...(Number(penSpacesForMaxFourCats) > 0
      ? [{ penCapacity: 4, available: Number(penSpacesForMaxFourCats) }]
      : []),
    ...(Number(penSpacesForMaxFiveCats) > 0
      ? [{ penCapacity: 5, available: Number(penSpacesForMaxFiveCats) }]
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
