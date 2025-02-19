import { customAlphabet } from "nanoid";

export const generateShortId = (name) => {
  const charactersAvailable =
    "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

  const nameParts = name.split(" ");
  const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
  const lastInitial = nameParts[1]?.charAt(0).toUpperCase() || firstInitial; // Use first initial if no last name

  const randomPart = customAlphabet(charactersAvailable, 5)();

  return firstInitial + lastInitial + randomPart;
};

export const generateBookingId = () => {
  const numbers = customAlphabet("123456789", 3)();
  const letters = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ", 4)();
  return `${numbers}${letters}`;
};
