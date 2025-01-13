import { useDispatch } from "react-redux";

import useGetCatsDetailsSelectors from "../../../hooks/selectors/use-get-cats-details-selectors";

import { setCatsDetails } from "../../../store/cats/cats.slice";

const useHandleAddCatsDetailsChange = () => {
  const { catsDetails } = useGetCatsDetailsSelectors();
  const dispatch = useDispatch();

  const handleAddCatsDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setCatsDetails({ ...catsDetails, [name]: value }));
  };

  return { handleAddCatsDetailsChange };
};

export default useHandleAddCatsDetailsChange;
