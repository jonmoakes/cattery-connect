import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetMoveCustomerToNewCatterySelectors from "../../../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import useUpdateCatsCatteryIdsSuccessSwal from "../swals/use-update-cats-cattery-ids-success-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useNoCatsFoundSwal from "../swals/use-no-cats-found-swal";
import usePartialFailureInUpdateCatsCatteryIdsSwal from "../swals/use-partial-failure-in-update-cats-cattery-ids-swal";
import useErrorUpdatingCatsCatteryIdsErrorSwal from "../swals/use-error-updating-cats-cattery-ids-error-swal";

const useUpdateCustomersCatsCatteryIdsResultSwalUseEffect = () => {
  const { updateCatsCatteryIdsResult, updateCatsCatteryIdsError } =
    useGetMoveCustomerToNewCatterySelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { updateCatsCatteryIdsSuccessSwal } =
    useUpdateCatsCatteryIdsSuccessSwal();
  const { noCatsFoundSwal } = useNoCatsFoundSwal();
  const { partialFailureInUpdateCatsCatteryIdsSwal } =
    usePartialFailureInUpdateCatsCatteryIdsSwal();
  const { errorUpdatingCatsCatteryIdsErrorSwal } =
    useErrorUpdatingCatsCatteryIdsErrorSwal();

  useEffect(() => {
    if (!updateCatsCatteryIdsResult && !updateCatsCatteryIdsError) return;

    if (updateCatsCatteryIdsResult === "fulfilled") {
      updateCatsCatteryIdsSuccessSwal();
    } else if (updateCatsCatteryIdsResult === "rejected") {
      if (updateCatsCatteryIdsError === "no cats found") {
        noCatsFoundSwal();
      } else if (Array.isArray(updateCatsCatteryIdsError)) {
        partialFailureInUpdateCatsCatteryIdsSwal(updateCatsCatteryIdsError);
      } else {
        // Handle case where it's a single error (fallback)
        errorUpdatingCatsCatteryIdsErrorSwal(updateCatsCatteryIdsError);
      }
    }
  }, [
    fireSwal,
    dispatch,
    updateCatsCatteryIdsResult,
    updateCatsCatteryIdsError,
    hamburgerHandlerNavigate,
    updateCatsCatteryIdsSuccessSwal,
    noCatsFoundSwal,
    partialFailureInUpdateCatsCatteryIdsSwal,
    errorUpdatingCatsCatteryIdsErrorSwal,
  ]);
};

export default useUpdateCustomersCatsCatteryIdsResultSwalUseEffect;
