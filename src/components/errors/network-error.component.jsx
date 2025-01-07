import { ErrorDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";

const NetworkError = () => (
  <ErrorDiv className="margin">
    <h1>network error</h1>
    <p>we've noticed that your internet connection seems to be offline.</p>
    <p>
      some features on this page may not be available until your network
      connection is restored.
    </p>
    <p>
      please check your connection. this warning will disappear when your
      connection has been restored.
    </p>
    <p>or you can tap the reload page button below to try again.</p>

    <Button type="button" onClick={() => window.location.reload()}>
      reload
    </Button>
  </ErrorDiv>
);

export default NetworkError;
