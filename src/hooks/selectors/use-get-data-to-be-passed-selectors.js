import { useSelector } from "react-redux";

import { selectDataToBePassedSelectors } from "../../store/data-to-be-passed/data-to-be-passed.slice";

const useGetDataToBePassedSelectors = () => {
  const { dataToBePassed } = useSelector(selectDataToBePassedSelectors);

  return {
    dataToBePassed,
  };
};

export default useGetDataToBePassedSelectors;
