import { useDispatch } from "react-redux";

import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";

import { setAddCatDetails } from "../../../store/add-cat/add-cat.slice";

const useHandleAddCatsDetailsChange = () => {
  const { addCatDetails } = useGetAddCatDetailsSelectors();
  const dispatch = useDispatch();

  const handleAddCatsDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setAddCatDetails({ ...addCatDetails, [name]: value }));
  };

  return { handleAddCatsDetailsChange };
};

export default useHandleAddCatsDetailsChange;
