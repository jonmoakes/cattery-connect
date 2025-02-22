export const databaseId = import.meta.env.VITE_DATABASE_ID;
export const usersCollectionId = import.meta.env.VITE_USERS_COLLECTION_ID;
export const customersCollectionId = import.meta.env
  .VITE_CUSTOMERS_COLLECTION_ID;
export const catteryInfoCollectionId = import.meta.env
  .VITE_CATTERY_INFO_COLLECTION_ID;
export const availablilityCollectionId = import.meta.env
  .VITE_AVAILABILTY_COLLECTION_ID;
export const bookingsCollectionId = import.meta.env.VITE_BOOKINGS_COLLECTION_ID;
export const catsCollectionId = import.meta.env.VITE_CATS_COLLECTION_ID;

export const standardRateLimit = 500;
export const highRateLimit = 1000;
export const defaultRateLimit = 25;
export const smallRateLimit = 250;

export const defaultTableSize = 30;

export const maxTextAreaCharacterLength = 1000;

// errors
export const pensRollbackFailureErrorCode = "PRBF";
export const catteryNotAvailableOnThisDateString =
  "we are not able to make this booking because the cattery is not available for bookings on the following dates:";
