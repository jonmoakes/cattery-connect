const useGenerateYearRange = () => {
  const generateYearRange = (currentYear, numberOfYears) => {
    return Array.from({ length: numberOfYears }, (_, i) => currentYear + i);
  };

  const currentYear = new Date().getFullYear();
  const yearRange = generateYearRange(currentYear, 15);

  return { yearRange };
};

export default useGenerateYearRange;
