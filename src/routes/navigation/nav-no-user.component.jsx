import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useNavLogic from "./nav-hooks/use-nav-logic";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedOutRoutes } from "./routes";

const NavNoUser = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { handleNavigate, formattedLink } = useNavLogic();

  const location = useLocation();

  return (
    <>
      {!currentUser ? (
        <>
          {signedOutRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink key={route} onClick={() => handleNavigate(route)}>
                <BorderLink>{formattedLink(route)}</BorderLink>
              </NavLink>
            ) : null;
          })}
        </>
      ) : null}
    </>
  );
};

export default NavNoUser;
