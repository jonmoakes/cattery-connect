export const isValidDate = (dateString) => {
  // Regular expression to match the YYYY-MM-DD format
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  // Check if the string matches the format
  if (!regex.test(dateString)) {
    return false;
  }

  // Parse the date and check if it is valid
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Remove time component for comparison

  // Ensure the date matches the input and is not in the past
  return date.toISOString().startsWith(dateString) && date >= today;
};
