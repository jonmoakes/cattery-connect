import { Container } from "../../styles/container/container.styles";

const ErrorFallback = () => (
  <Container>
    <p>Sorry, there was an error, most likely on our end.. :( </p>
    <p>Please Try Checking Your internet Connection.</p>

    <p>
      if you're sure you're online, please try reloading the page by tapping the
      button below.
    </p>
    <button onClick={() => window.location.reload()}>reload the page</button>
  </Container>
);

export default ErrorFallback;
