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

const useSubmitUploadCat = (catDetails, docId) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const { confirmSwal } = useConfirmSwal();

  const submitUploadCat = (e) => {
    e.preventDefault();
    const catsName = catDetails.catsName;
    const title =
      path === addCatRoute
        ? confirmAddCatMessage(catsName)
        : confirmEditCatMessage;

    confirmSwal(
      title,
      "",
      imSureMessage,
      "",
      () => dispatch(uploadCatToDbAsync({ catObject: catDetails, docId })),
      null
    );
  };

  return { submitUploadCat };
};

export default useSubmitUploadCat;
