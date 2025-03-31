import { useSelector } from "react-redux";

import { selectMoveCustomerToNewCatterySelectors } from "../../store/move-customer-to-new-cattery/selectors";

const useGetMoveCustomerToNewCatterySelectors = () => {
  const {
    customerId,
    checkCustomerCanBeMovedIsLoading,
    checkCustomerCanBeMovedResult,
    checkCustomerCanBeMovedError,
    newCatteryId,
    updateCustomerCatteryIdIsLoading,
    updateCustomerCatteryIdResult,
    updateCustomerCatteryIdError,
    updateCatsCatteryIdsIsLoading,
    updateCatsCatteryIdsResult,
    updateCatsCatteryIdsError,
  } = useSelector(selectMoveCustomerToNewCatterySelectors);

  const { customerDocumentId, customerCanBeMoved } =
    checkCustomerCanBeMovedResult ?? {};

  return {
    customerId,
    checkCustomerCanBeMovedIsLoading,
    checkCustomerCanBeMovedResult,
    checkCustomerCanBeMovedError,
    customerDocumentId,
    customerCanBeMoved,
    newCatteryId,
    updateCustomerCatteryIdIsLoading,
    updateCustomerCatteryIdResult,
    updateCustomerCatteryIdError,
    updateCatsCatteryIdsIsLoading,
    updateCatsCatteryIdsResult,
    updateCatsCatteryIdsError,
  };
};

export default useGetMoveCustomerToNewCatterySelectors;
