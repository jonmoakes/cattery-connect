import { useSelector } from "react-redux";

import { selectCatDetailsManagementSelectors } from "../../store/cat-details-management/cat-details-management.slice";

const useGetCatDetailsManagementSelectors = () => {
  const {
    catDetailManagementIsLoading,
    catDetails,
    catDetailsManagementResult,
    catDetailsManagementError,
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
    catDetailManagementIsLoading,
    catDetails,
    catDetailsManagementResult,
    catDetailsManagementError,
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
