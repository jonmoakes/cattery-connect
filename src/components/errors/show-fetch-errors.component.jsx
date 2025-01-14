import Balancer from "react-wrap-balancer";
import useHandleShowError from "./errors-hooks/use-handle-show-error";

import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";
import { YellowSpan } from "../../styles/span/span.styles";

const ShowFetchErrors = () => {
  const { showErrorHeading, errorToDisplay } = useHandleShowError();

  return (
    <>
      {errorToDisplay() ? (
        <ParentDiv>
          <p>
            <Balancer>
              sorry, there was an error fetching data on our end. please see the
              details below:
            </Balancer>
          </p>
          <ErrorDiv className="fetch-error">
            <p>{showErrorHeading()}</p>
            <p>
              error received:
              <br />'<YellowSpan>{errorToDisplay()}</YellowSpan>'
            </p>
          </ErrorDiv>

          <p>press the 'reload page' button and then try again.</p>
          <p>please don't use the browsers back button.</p>
          <p>
            if you continue to see this error, please{" "}
            <StyledLink to={contactRoute}>contact us</StyledLink> and quote the
            error in yellow text above.
          </p>
          <p>we apologise for the inconvenience!</p>

          <Button className="teal" onClick={() => window.location.reload()}>
            reload
          </Button>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
