// when creating date and pen info for a year
export const generateDatesAndPensInfo = (year, amPens, pmPens) => {
  const datesAndPensInfo = [];
  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDate = `${year}-${String(month + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      datesAndPensInfo.push({
        date: formattedDate,
        morningPensAvailable: amPens,
        afternoonPensAvailable: pmPens,
      });
    }
  }
  return datesAndPensInfo;
};
