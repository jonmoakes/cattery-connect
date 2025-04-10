import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { getDateDocumentsToDeleteAsync } from "../../../store/delete-dates/delete-dates-thunks";
import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";
import useGetMonthForUi from "./use-get-month-for-ui";

const useConfirmFetchDateDocumentsToDelete = () => {
  const { catteryId, month, year } = useGetDeleteDatesSelectors();
  const { monthForUi } = useGetMonthForUi();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmFetchDateDocumentsToDelete = (e) => {
    e.preventDefault();

    const confirmResult = () => {
      dispatch(getDateDocumentsToDeleteAsync({ catteryId, month, year }));
    };

    confirmSwal(
      `fetch the dates for ${catteryId} for ${monthForUi}, ${year}?`,
      "",
      "confirm",
      "",
      confirmResult,
      null
    );
  };

  return { confirmFetchDateDocumentsToDelete };
};

export default useConfirmFetchDateDocumentsToDelete;
