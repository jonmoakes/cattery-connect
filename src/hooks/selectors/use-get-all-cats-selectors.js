import { useSelector } from "react-redux";

import { selectGetAllCatsSelectors } from "../../store/get-all-cats/selectors";

const useGetAllCatsSelectors = () => {
  const {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
  } = useSelector(selectGetAllCatsSelectors);

  return {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
  };
};

export default useGetAllCatsSelectors;
