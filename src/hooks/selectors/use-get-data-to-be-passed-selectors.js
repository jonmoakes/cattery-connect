import { useSelector } from "react-redux";

import { selectDataToBePassedSelectors } from "../../store/data-to-be-passed/data-to-be-passed.slice";

const useGetDataToBePassedSelectors = () => {
  const { dataToBePassed, customerToEditDetails } = useSelector(
    selectDataToBePassedSelectors
  );

  return {
    dataToBePassed,
    customerToEditDetails,
  };
};

export default useGetDataToBePassedSelectors;
