import { useSelector } from "react-redux";

import { selectCatDetailsManagementSelectors } from "../../store/cat-details-management/cat-details-management.slice";

const useGetCatDetailsManagementSelectors = () => {
  const {
    detailsRequiredForCatManagement,
    catDetailManagementIsLoading,
    catDetails,
    catDetailsForFormComparison,
    catDetailsManagementResult,
    catDetailsManagementError,
    deleteCatResult,
    deleteCatError,
  } = useSelector(selectCatDetailsManagementSelectors);

  const {
    catsName,
    catsBreed,
    catsAge,
    catsGender,
    catsMedicalInfo,
    vaccinationStatus,
    catsFeedingInfo,
    catsBehaviourInfo,
  } = catDetails ?? {};

  return {
    detailsRequiredForCatManagement,
    catDetailManagementIsLoading,
    catDetails,
    catDetailsForFormComparison,
    catDetailsManagementResult,
    catDetailsManagementError,
    deleteCatResult,
    deleteCatError,
    catsName,
    catsBreed,
    catsAge,
    catsGender,
    catsMedicalInfo,
    vaccinationStatus,
    catsFeedingInfo,
    catsBehaviourInfo,
  };
};

export default useGetCatDetailsManagementSelectors;
