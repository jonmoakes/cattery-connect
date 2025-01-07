import Logo from "../../assets/logo-80x80.jpg";

import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";
import useNavLogic from "./nav-hooks/use-nav-logic";

const NavLogo = () => {
  const { handleNavigate } = useNavLogic();

  const handleClick = () => {
    const route = "/";
    handleNavigate(route);
  };

  return (
    <LogoContainer>
      <LogoImage onClick={handleClick} src={Logo} alt="logo" />
    </LogoContainer>
  );
};

export default NavLogo;
