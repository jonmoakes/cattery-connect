import useHandleShowError from "./errors-hooks/use-handle-show-error";

import CustomSpan from "../custom-span/custom-span.component";

import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";

const ShowFetchErrors = () => {
  const { showErrorHeading, errorToDisplay } = useHandleShowError();

  return (
    <>
      {errorToDisplay() ? (
        <ParentDiv>
          <p>
            sorry, there was an error fetching data on our end. please see the
            details below:
          </p>
          <ErrorDiv className="fetch-error">
            <p>{showErrorHeading()}</p>
            <p>
              error received:
              <br />'<CustomSpan color="yellow">{errorToDisplay()}</CustomSpan>'
            </p>
          </ErrorDiv>

          <p>press the 'reload page' button and then try again.</p>
          <p>please don't use the browsers back button.</p>
          <p>
            if you continue to see this error, please{" "}
            <StyledLink to={contactRoute}>contact us</StyledLink> and quote the
            error in green box above.
          </p>
          <p>we apologise for the inconvenience!</p>

          <RadialTealButton onClick={() => window.location.reload()}>
            reload
          </RadialTealButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
