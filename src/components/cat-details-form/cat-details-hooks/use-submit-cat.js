import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { uploadCatToDbAsync } from "../../../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
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
  } = useGetCatDetailsManagementSelectors();

  const { customerDocumentId } = detailsRequiredForCatManagement ?? "";
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

    confirmSwal(
      title,
      "",
      imSureMessage,
      "",
      () =>
        dispatch(
          uploadCatToDbAsync({
            catObject,
            customerDocumentId,
          })
        ),
      null
    );
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
