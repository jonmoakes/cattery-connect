import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { ErrorDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";

const NetworkError = () => (
  <ErrorDiv className="margin">
    <CustomBalancedText type="h1">network error</CustomBalancedText>
    <CustomBalancedText>
      we've noticed that your internet connection seems to be offline.
    </CustomBalancedText>
    <CustomBalancedText>
      some features on this page may not be available until your network
      connection is restored.
    </CustomBalancedText>
    <CustomBalancedText>
      please check your connection. this warning will disappear when your
      connection has been restored.
    </CustomBalancedText>
    <CustomBalancedText>
      or you can tap the reload page button below to try again.
    </CustomBalancedText>

    <Button type="button" onClick={() => window.location.reload()}>
      reload
    </Button>
  </ErrorDiv>
);

export default NetworkError;
