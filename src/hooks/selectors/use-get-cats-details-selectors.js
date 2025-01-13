import { useSelector } from "react-redux";

import { selectCatsDetailsSelectors } from "../../store/cats/cats.slice";

const useGetCatsDetailsSelectors = () => {
  const { catsDetails } = useSelector(selectCatsDetailsSelectors);

  const { catsName, catsBreed, catsAge, catsGender } = catsDetails;

  return {
    catsDetails,
    catsName,
    catsBreed,
    catsAge,
    catsGender,
  };
};

export default useGetCatsDetailsSelectors;
