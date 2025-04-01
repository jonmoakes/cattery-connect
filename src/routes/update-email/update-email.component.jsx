import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useUpdateEmailResultResultSwal from "./update-email-hooks/use-update-email-result-swal";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import TitleAndLoader from "./title-and-loader.component";
import NewEmail from "./new-email.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";
import Metadata from "../../components/metadata/metadata.component";

const UpdateEmail = () => {
  const { role } = useGetCurrentUserSelectors();
  useUpdateEmailResultResultSwal();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Update Your Email Address"
        description="Update the email address that you use to sign into the app with and receive correspondance to."
      />
      <TitleAndLoader />

      <ParentDiv>
        {role === "owner" ? (
          <>
            <CustomBalancedText>
              if you wish to update your email address, please{" "}
              <StyledLink to={contactRoute}>contact jonathan.</StyledLink>
            </CustomBalancedText>
            <CustomBalancedText>
              This is because, for your customers to receive your updated email
              address, we need to update additional records in the database.
            </CustomBalancedText>
            <CustomBalancedText>
              These changes cannot be made within the app.
            </CustomBalancedText>
            <CustomBalancedText>
              Apologies for any inconvenience, and thank you for your
              understanding.
            </CustomBalancedText>
          </>
        ) : (
          <NewEmail />
        )}
      </ParentDiv>
    </Container>
  );
};

export default UpdateEmail;
