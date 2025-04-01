import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";

import Metadata from "../../components/metadata/metadata.component";
import TitleAndLoader from "./title-and-loader.component";
import UpdatePasswordButton from "./update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdatePasswordRequest = () => {
  useResetPasswordRequestResultSwal();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Update Your Password"
        description="Update your password that you use to sign into the app with."
      />
      <TitleAndLoader />
      <ParentDiv>
        <UpdatePasswordButton />
      </ParentDiv>
    </Container>
  );
};

export default UpdatePasswordRequest;
