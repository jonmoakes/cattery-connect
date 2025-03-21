import useGetHamburgerMenuSelectors from "../../hooks/selectors/use-get-hamburger-menu-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";
import NavSignOut from "./nav-sign-out.component";
import NavUserSignedIn from "./nav-user-signed-in.component";

import { Nav, Menu } from "../../styles/div/div.styles";
import useNavLogic from "./nav-hooks/use-nav-logic";

const Navigation = () => {
  const { signOutIsLoading } = useGetCurrentUserSelectors();
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { isRouteWithHeader } = useNavLogic();

  return (
    <>
      {signOutIsLoading ? (
        <SkeletonBox loadingText="signing you out..." />
      ) : null}

      {isRouteWithHeader ? (
        <>
          <Nav>
            <NavLogo />
            <NavHamburger />
            <Menu {...{ showHamburgerMenu }}>
              <NavNoUser />
              <NavUserSignedIn />
              <NavSignOut />
            </Menu>
          </Nav>
        </>
      ) : null}
    </>
  );
};

export default Navigation;
