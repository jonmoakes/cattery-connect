export const generateCatteryAvailabilityForDate = (
  date,
  penSpacesForOneOrTwoCats,
  penSpacesForThreeCats,
  penSpacesForFourCats,
  penSpacesForFiveCats
) => {
  // Build an array of pens where capacity 2 is always included,
  // and capacities 3, 4, and 5 are included only if they’re greater than 0.
  const buildPens = () => [
    { penCapacity: 2, available: Number(penSpacesForOneOrTwoCats) },
    ...(Number(penSpacesForThreeCats) > 0
      ? [{ penCapacity: 3, available: Number(penSpacesForThreeCats) }]
      : []),
    ...(Number(penSpacesForFourCats) > 0
      ? [{ penCapacity: 4, available: Number(penSpacesForFourCats) }]
      : []),
    ...(Number(penSpacesForFiveCats) > 0
      ? [{ penCapacity: 5, available: Number(penSpacesForFiveCats) }]
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
