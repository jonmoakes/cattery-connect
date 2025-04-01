import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";
import useGetGenerateNewPasswordRequestSelectors from "../../hooks/selectors/use-get-generate-new-password-request-selectors";
import useCheckForValidEmailAndSendRequest from "./forgot-password-request-hooks/use-check-for-valid-email-and-send-request";
import useForgotPasswordRequestFunctions from "./forgot-password-request-hooks/use-forgot-password-request-functions";

import Metadata from "../../components/metadata/metadata.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { Button } from "../../styles/button/button.styles";

import { viewForgotPasswordAccordionData } from "./view-forgot-password-accordion-data";

const ForgotPasswordRequest = () => {
  useResetPasswordRequestResultSwal();
  const {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
  } = useGetGenerateNewPasswordRequestSelectors();
  const { checkForValidEmailAndSendRequest } =
    useCheckForValidEmailAndSendRequest();
  const { handleEmailChange } = useForgotPasswordRequestFunctions();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Forgot Password"
        description="Request a password reset link to recover access to your Cattery Connect account."
      />

      {generateNewPasswordRequestIsLoading ? (
        <SkeletonBox loadingText="Please Wait" />
      ) : null}

      <ParentDiv>
        <CustomBalancedText type="h1">forgot password</CustomBalancedText>
      </ParentDiv>

      <ParentDiv>
        <HelpAccordion
          openText="forgot password help"
          data={viewForgotPasswordAccordionData}
        />

        <Form
          className="no-margin-top"
          onSubmit={checkForValidEmailAndSendRequest}
        >
          <Label>your email:</Label>
          <LowercasedInput
            type="email"
            required
            onChange={handleEmailChange}
            value={generateNewPasswordRequestEmail || ""}
          />

          {generateNewPasswordRequestEmail ? (
            <Button type="submit">reset password</Button>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPasswordRequest;
