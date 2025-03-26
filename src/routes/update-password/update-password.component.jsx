import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";

import TitleAndLoader from "./title-and-loader.component";
import UpdatePasswordButton from "./update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdatePasswordRequest = () => {
  useResetPasswordRequestResultSwal();

  return (
    <Container>
      <TitleAndLoader />
      <ParentDiv>
        <UpdatePasswordButton />
      </ParentDiv>
    </Container>
  );
};

export default UpdatePasswordRequest;
