import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useHandleShowError from "./errors-hooks/use-handle-show-error";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

const ShowFetchErrors = () => {
  const { role } = useGetCurrentUserSelectors();
  const { getCatteryEmailError } = useGetSendEmailSelectors();
  const { showErrorHeading, errorToDisplay } = useHandleShowError();

  return (
    <>
      {errorToDisplay() ? (
        <ParentDiv>
          <CustomBalancedText>
            sorry, there was an error fetching data on our end. please see the
            details below:
          </CustomBalancedText>
          <ErrorDiv className="fetch-error">
            <CustomBalancedText>{showErrorHeading()}</CustomBalancedText>
            <CustomBalancedText>
              error received:
              <br />'
              <CustomSpan className="yellow">{errorToDisplay()}</CustomSpan>'
            </CustomBalancedText>
          </ErrorDiv>

          <CustomBalancedText>
            press the 'reload' button and then try again.
          </CustomBalancedText>

          {role !== "admin" ? (
            <>
              <CustomBalancedText>
                please don't use the browsers back button.
              </CustomBalancedText>
              {!getCatteryEmailError ? (
                <CustomBalancedText>
                  if you continue to see this error, please{" "}
                  <StyledLink to={contactRoute}>contact us</StyledLink> and
                  quote the error in green box above.
                </CustomBalancedText>
              ) : (
                <CustomBalancedText>
                  if you continue to see this error, please contact us by phone
                  or by visiting.
                </CustomBalancedText>
              )}
              <CustomBalancedText>
                we apologise for the inconvenience!
              </CustomBalancedText>
            </>
          ) : null}

          <RadialTealButton onClick={() => window.location.reload()}>
            reload
          </RadialTealButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
