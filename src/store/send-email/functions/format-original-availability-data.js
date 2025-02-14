export const formatOriginalAvailabilityData = (availabilityData) => {
  if (!Array.isArray(availabilityData) || availabilityData.length === 0) {
    return "No availability data found.";
  }

  return availabilityData
    .map((day) => {
      const { date, documentId, morningPens, afternoonPens } = day || {};

      // Helper function to format pen data
      const formatPens = (pens) => {
        if (!Array.isArray(pens) || pens.length === 0) {
          return "No pen data available.";
        }
        return pens
          .map(
            (pen) =>
              `Max Capacity: ${pen?.maxCatCapacity || "N/A"}, Available: ${
                pen?.available || "N/A"
              }`
          )
          .join("\n");
      };

      return `
  Date: ${date || "N/A"}
  Document ID: ${documentId || "N/A"}
  
  Morning Pens:
  ${formatPens(morningPens)}
  
  Afternoon Pens:
  ${formatPens(afternoonPens)}
  
  ----------------------------------------
  `;
    })
    .join("\n");
};
