import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AccountButtonLinks = () => {
  const { role } = useGetCurrentUserSelectors();
  const { adminButtons, catteryOwnerButtons, catteryOwnerCustomerDataButtons } =
    useNavigateToRoute();

  return (
    <>
      {!role ? null : role === "admin" ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: adminButtons }} />
        </ParentDiv>
      ) : role === "owner" ? (
        <>
          <ParentDiv>
            <CustomBalancedText type="h3">
              customer & cat info
            </CustomBalancedText>
            <RenderButtonsList {...{ buttons: catteryOwnerButtons }} />
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
          <CustomBalancedText>
            customer account buttons go here.
          </CustomBalancedText>
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
