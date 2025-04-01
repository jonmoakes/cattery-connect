import useChooseNewPasswordResultSwal from "./choose-new-password-hooks/use-choose-new-password-result-swal";
import useChooseNewPasswordLogic from "./choose-new-password-hooks/use-choose-new-password-logic";
import useConfirmUpdatePassword from "./choose-new-password-hooks/use-confirm-update-password";

import Metadata from "../../components/metadata/metadata.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import Intro from "./sections/intro.component";
import NewPasswords from "./sections/new-passwords.component";
import UpdatePasswordButton from "./sections/update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const ChooseNewPassword = () => {
  useChooseNewPasswordResultSwal();
  const { newPasswordResultIsLoading } = useChooseNewPasswordLogic();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Choose New Password"
        description="Reset your password and create a new one to secure your Cattery Connect account."
      />

      {newPasswordResultIsLoading ? (
        <SkeletonBox loadingText="updating password.." />
      ) : null}

      <Intro />

      <ParentDiv>
        <Form onSubmit={confirmUpdatePassword}>
          <NewPasswords />
          <UpdatePasswordButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ChooseNewPassword;
