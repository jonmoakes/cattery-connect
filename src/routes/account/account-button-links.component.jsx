import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { contactRoute } from "../../strings/routes";

const AccountButtonLinks = () => {
  const { role } = useGetCurrentUserSelectors();
  const { catteryDetailsError } = useGetCatteryDetailsSelectors();
  const {
    adminButtons,
    catteryOwnerButtons,
    catteryOwnerCustomerDataButtons,
    customerDetailsButtons,
  } = useNavigateToRoute();

  return (
    <>
      {!role ? null : role === "admin" ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: adminButtons }} />
        </ParentDiv>
      ) : role === "owner" ? (
        <>
          <ParentDiv>
            <CustomBalancedText type="h3">data</CustomBalancedText>
            <RenderButtonsList {...{ buttons: catteryOwnerButtons }} />
            {catteryDetailsError ? (
              <>
                <CustomBalancedText>
                  couldn't fetch data to determine whether to show the manage
                  pens and app income buttons..
                </CustomBalancedText>
                <CustomBalancedText>
                  please try reloading the page or{" "}
                  <StyledLink to={contactRoute}>contact me</StyledLink> if you
                  need access to these pages and the error persists.
                </CustomBalancedText>
              </>
            ) : null}
          </ParentDiv>

          <ParentDiv>
            <CustomBalancedText type="h3">other options</CustomBalancedText>
            <RenderButtonsList
              {...{ buttons: catteryOwnerCustomerDataButtons }}
            />
          </ParentDiv>
        </>
      ) : (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: customerDetailsButtons }} />
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
