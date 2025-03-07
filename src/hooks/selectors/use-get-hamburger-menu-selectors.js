import { useSelector } from "react-redux";

import { selectHamburgerMenuSelectors } from "../../store/hamburger-menu/selectors";

const useGetHamburgerMenuSelectors = () => {
  const { showHamburgerMenu } = useSelector(selectHamburgerMenuSelectors);

  return { showHamburgerMenu };
};

export default useGetHamburgerMenuSelectors;
