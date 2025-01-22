import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";
import { fetchCatsOwnerDetailsAsync } from "../../../store/get-all-cats/get-all-cats.thunks";

const useFetchCatsOwnerDetailsThunkUseEffect = () => {
  const { selectedCatsOwnerCustomerId } = useGetAllCatsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedCatsOwnerCustomerId) return;
    dispatch(fetchCatsOwnerDetailsAsync({ selectedCatsOwnerCustomerId }));
  }, [selectedCatsOwnerCustomerId, dispatch]);
};

export default useFetchCatsOwnerDetailsThunkUseEffect;
