import { useSelector } from "react-redux";

import { selectAddCatDetailsSelectors } from "../../store/add-cat/add-cat.slice";

const useGetAddCatDetailsSelectors = () => {
  const { addCatDetails, addCatIsLoading, addCatResult, addCatError } =
    useSelector(selectAddCatDetailsSelectors);

  const {
    catsName,
    catsBreed,
    catsAge,
    catsGender,
    catsMedicalInfo,
    vaccinationStatus,
    catsFeedingInfo,
    catsBehaviourInfo,
  } = addCatDetails ?? {};

  return {
    addCatDetails,
    addCatIsLoading,
    addCatResult,
    addCatError,
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

export default useGetAddCatDetailsSelectors;
