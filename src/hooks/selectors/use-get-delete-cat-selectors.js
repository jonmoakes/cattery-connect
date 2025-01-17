import { useSelector } from "react-redux";

import { selectDeleteCatSelectors } from "../../store/delete-cat/delete-cat.slice";

const useGetDeleteCatSelectors = () => {
  const { deleteCatResult, deleteCatError, deleteCatIsLoading } = useSelector(
    selectDeleteCatSelectors
  );

  return {
    deleteCatResult,
    deleteCatError,
    deleteCatIsLoading,
  };
};

export default useGetDeleteCatSelectors;
