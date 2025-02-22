import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import {
  addCatAsync,
  editCatAsync,
} from "../../../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { addCatRoute, editCatRoute } from "../../../strings/routes";
import {
  confirmAddDataMessage,
  confirmEditDataMessage,
  imSureMessage,
} from "../../../strings/confirms";
import { formDetailsAreTheSameMessage } from "../../../strings/info";
import { formFieldsHaveNotChanged } from "../../../functions/form-fields-have-not-changed";

const useSubmitCat = () => {
  const {
    detailsRequiredForCatManagement,
    catsName,
    catDetails: catObject,
    catDetailsForFormComparison,
    catsId,
  } = useGetCatDetailsManagementSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { customerId, customerName } = detailsRequiredForCatManagement ?? "";

  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const handleSubmission = () => {
    const title =
      path === addCatRoute
        ? confirmAddDataMessage(catsName)
        : confirmEditDataMessage(catsName);

    const confirmResult = () => {
      if (catsId === undefined) {
        dispatch(
          addCatAsync({ catObject, customerId, customerName, catteryId })
        );
      } else {
        dispatch(editCatAsync({ catObject }));
      }
    };

    confirmSwal(title, "", imSureMessage, "", confirmResult, null);
  };

  const submitCat = (e) => {
    e.preventDefault();

    if (path === editCatRoute) {
      if (formFieldsHaveNotChanged(catObject, catDetailsForFormComparison)) {
        fireSwal(
          "info",
          formDetailsAreTheSameMessage(catsName),
          "",
          0,
          "",
          false,
          "",
          false
        );
        return;
      }
    }

    handleSubmission();
  };

  return { submitCat };
};

export default useSubmitCat;
