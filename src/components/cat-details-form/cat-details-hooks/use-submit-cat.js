import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { uploadCatToDbAsync } from "../../../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { addCatRoute } from "../../../strings/routes";
import {
  confirmAddCatMessage,
  confirmEditCatMessage,
  imSureMessage,
} from "../../../strings/confirms";
import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

const useSubmitCat = () => {
  const {
    detailsRequiredForCatManagement,
    catsName,
    catDetails: catObject,
  } = useGetCatDetailsManagementSelectors();

  const { customerDocumentId } = detailsRequiredForCatManagement ?? "";
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const { confirmSwal } = useConfirmSwal();

  const submitCat = (e) => {
    e.preventDefault();

    const title =
      path === addCatRoute
        ? confirmAddCatMessage(catsName)
        : confirmEditCatMessage;

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

  return { submitCat };
};

export default useSubmitCat;
