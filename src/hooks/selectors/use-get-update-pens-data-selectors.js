import { useSelector } from "react-redux";

import { selectUpdatePensDataSelectors } from "../../store/update-pens-data/update-pens-data.slice";

const useGetUpdatePensDataSelectors = () => {
  const { updatePensDataIsLoading, updatePensDataResult, updatePensDataError } =
    useSelector(selectUpdatePensDataSelectors);

  return {
    updatePensDataIsLoading,
    updatePensDataResult,
    updatePensDataError,
  };
};

export default useGetUpdatePensDataSelectors;
