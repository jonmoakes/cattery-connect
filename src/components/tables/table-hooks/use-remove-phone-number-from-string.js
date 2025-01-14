const useRemovePhoneNumberFromString = (value) => {
  const removePhoneNumberFromString = () => {
    if (!value) {
      return { phoneNumber: null, updatedString: "" };
    }
    // Define the regex pattern for UK phone numbers
    const phonePattern = /\b0\d{10}\b/;

    const match = value.match(phonePattern);

    // If a match is found, remove it from the string and return both the phone number and the updated string
    if (match) {
      const phoneNumber = match[0];
      const updatedString = value.replace(phonePattern, "").trim();
      return { phoneNumber, updatedString };
    }

    // If no match is found, return null for the phone number and the original string
    return { phoneNumber: null, updatedString: value };
  };

  const { phoneNumber, updatedString } = removePhoneNumberFromString(value);

  return { phoneNumber, updatedString };
};

export default useRemovePhoneNumberFromString;
