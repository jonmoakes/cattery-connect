import { createSelector } from "@reduxjs/toolkit";

export const selectMoveCustomerToNewCatterySelectors = createSelector(
  (state) => state.moveCustomerToNewCattery,
  (moveCustomerToNewCattery) => ({
    customerId: moveCustomerToNewCattery.customerId,
    checkCustomerCanBeMovedIsLoading:
      moveCustomerToNewCattery.checkCustomerCanBeMovedIsLoading,
    checkCustomerCanBeMovedResult:
      moveCustomerToNewCattery.checkCustomerCanBeMovedResult,
    checkCustomerCanBeMovedError:
      moveCustomerToNewCattery.checkCustomerCanBeMovedError,
    newCatteryId: moveCustomerToNewCattery.newCatteryId,
    updateCustomerCatteryIdIsLoading:
      moveCustomerToNewCattery.updateCustomerCatteryIdIsLoading,
    updateCustomerCatteryIdResult:
      moveCustomerToNewCattery.updateCustomerCatteryIdResult,
    updateCustomerCatteryIdError:
      moveCustomerToNewCattery.updateCustomerCatteryIdError,
    updateCatsCatteryIdsIsLoading:
      moveCustomerToNewCattery.updateCatsCatteryIdsIsLoading,
    updateCatsCatteryIdsResult:
      moveCustomerToNewCattery.updateCatsCatteryIdsResult,
    updateCatsCatteryIdsError:
      moveCustomerToNewCattery.updateCatsCatteryIdsError,
  })
);
