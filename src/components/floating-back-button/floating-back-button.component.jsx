import { useNavigate } from "react-router-dom";

import useConfirmGoBack from "./use-confirm-go-back";
import useIsRouteWithNavWarning from "../../hooks/is-route-with-nav-warning/use-is-route-with-nav-warning";
import useIsMobileDevice from "../../hooks/use-is-mobile-device";

import { BackArrow } from "../../styles/svg/svg.styles";
import { RelativePositionDiv } from "../../styles/div/div.styles";
import { BackButton } from "../../styles/button/button.styles";

const FloatingBackButton = () => {
  const { confirmGoBack } = useConfirmGoBack();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { isMobileDevice, isDesktop } = useIsMobileDevice();

  const navigate = useNavigate();

  return (
    <>
      {isDesktop() || !isRouteWithNavWarning() ? null : !isMobileDevice() &&
        !isRouteWithNavWarning() ? (
        <RelativePositionDiv>
          <BackButton onClick={() => navigate(-1)}>
            <BackArrow />
          </BackButton>
        </RelativePositionDiv>
      ) : !isMobileDevice() && isRouteWithNavWarning() ? (
        <RelativePositionDiv>
          <BackButton onClick={confirmGoBack}>
            <BackArrow />
          </BackButton>
        </RelativePositionDiv>
      ) : null}
    </>
  );
};

export default FloatingBackButton;
