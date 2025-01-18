import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import { setCatDetails } from "../../../store/cat-details-management/cat-details-management.slice";

const useHandleCatDetailsChange = () => {
  const { catDetails } = useGetCatDetailsManagementSelectors();
  const dispatch = useDispatch();

  const handleCatDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setCatDetails({ ...catDetails, [name]: value }));
  };

  return { handleCatDetailsChange };
};

export default useHandleCatDetailsChange;
