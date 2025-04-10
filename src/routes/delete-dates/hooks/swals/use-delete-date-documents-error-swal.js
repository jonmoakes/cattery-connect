import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetDeletePastDatesState } from "../../../../store/delete-dates/delete-dates-slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

const useDeleteDateDocumentsErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const deleteDateDocumentsErrorSwal = useCallback(
    (deleteDateDocumentsError) => {
      const errorMessage = Array.isArray(deleteDateDocumentsError)
        ? `Some documents weren't deleted.\n\nplease delete them manually.\n\nAll others were successfully deleted:\n\n${deleteDateDocumentsError.join(
            "\n"
          )}`
        : deleteDateDocumentsError;

      fireSwal(
        "error",
        "error deleting date documents",
        errorMessage,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeletePastDatesState());
        }
      });
    },
    [fireSwal, dispatch]
  );

  return { deleteDateDocumentsErrorSwal };
};

export default useDeleteDateDocumentsErrorSwal;
