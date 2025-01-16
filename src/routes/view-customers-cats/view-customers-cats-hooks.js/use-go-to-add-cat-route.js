import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { addCatRoute } from "../../../strings/routes";

const useGoToAddCatRoute = (customerDocumentId) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const goToAddCatRoute = () => {
    hamburgerHandlerNavigate(addCatRoute, { customerDocumentId });
  };

  return { goToAddCatRoute };
};

export default useGoToAddCatRoute;
