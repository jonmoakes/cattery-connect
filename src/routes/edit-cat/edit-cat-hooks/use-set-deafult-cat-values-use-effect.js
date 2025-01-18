import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCatDetails } from "../../../store/cat-details-management/cat-details-management.slice";

const useSetDefaultCatValuesUseEffect = (cat) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCatDetails(cat));
  }, [dispatch, cat]);
};

export default useSetDefaultCatValuesUseEffect;
