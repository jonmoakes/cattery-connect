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
    catsId,
    customerId,
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
    catsId,
    customerId,
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
