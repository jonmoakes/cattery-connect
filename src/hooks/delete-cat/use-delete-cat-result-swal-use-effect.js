import { useEffect } from "react";

import useGetCatDetailsManagementSelectors from "../selectors/use-get-cat-details-management-selectors";

import useDeleteCatFailSwal from "./swals/use-delete-cat-fail-swal";
import useDeleteCatSuccessSwal from "./swals/use-delete-cat-success-swal";

const useDeleteCatResultSwalUseEffect = () => {
  const { deleteCatResult, deleteCatError } =
    useGetCatDetailsManagementSelectors();

  const { deleteCatFailSwal } = useDeleteCatFailSwal();
  const { deleteCatSuccessSwal } = useDeleteCatSuccessSwal();

  useEffect(() => {
    if (!deleteCatResult && !deleteCatError) return;

    if (deleteCatResult === "fulfilled") {
      deleteCatSuccessSwal();
    } else {
      deleteCatFailSwal();
    }
  }, [
    deleteCatError,
    deleteCatFailSwal,
    deleteCatResult,
    deleteCatSuccessSwal,
  ]);
};

export default useDeleteCatResultSwalUseEffect;
