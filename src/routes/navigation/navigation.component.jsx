import useGetHamburgerMenuSelectors from "../../hooks/selectors/use-get-hamburger-menu-selectors";

import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";
import NavSignOut from "./nav-sign-out.component";

import { Nav, Menu } from "../../styles/div/div.styles";
import NavUserSignedIn from "./nav-user-signed-in.component";

const Navigation = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  return (
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
  );
};

export default Navigation;
