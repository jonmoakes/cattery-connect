import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useCatUploadedSuccessSwal from "./swals/use-cat-uploaded-success-swal";
import useCatUploadFailedSwal from "./swals/use-cat-upload-failed-swal";

import { addCatRoute } from "../../../strings/routes";

const useUploadCatResultSwalUseEffect = (fromRoute) => {
  const { catDetailsManagementResult, catDetailsManagementError, catsName } =
    useGetCatDetailsManagementSelectors();
  const { pathname: path } = useLocation();
  const { catUploadedSuccessSwal } = useCatUploadedSuccessSwal();
  const { catUploadFailedSwal } = useCatUploadFailedSwal();

  useEffect(() => {
    if (!catDetailsManagementResult && !catDetailsManagementError) return;

    const isSuccess = catDetailsManagementResult === "fulfilled";
    const action =
      path === addCatRoute
        ? isSuccess
          ? "added"
          : "adding"
        : isSuccess
        ? "updated"
        : "updating";

    if (isSuccess) {
      catUploadedSuccessSwal(catsName, action, fromRoute);
    } else {
      catUploadFailedSwal(action);
    }
  }, [
    catDetailsManagementError,
    catDetailsManagementResult,
    catUploadFailedSwal,
    catUploadedSuccessSwal,
    catsName,
    fromRoute,
    path,
  ]);
};

export default useUploadCatResultSwalUseEffect;
