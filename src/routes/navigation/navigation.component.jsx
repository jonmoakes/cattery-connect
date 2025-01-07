import useGetHamburgerMenuSelectors from "../../hooks/selectors/use-get-hamburger-menu-selectors";

import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";

import { Nav, Menu } from "../../styles/div/div.styles";

const Navigation = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  return (
    <>
      <Nav>
        <NavLogo />
        <NavHamburger />
        <Menu {...{ showHamburgerMenu }}>
          <NavNoUser />
        </Menu>
      </Nav>
    </>
  );
};

export default Navigation;
