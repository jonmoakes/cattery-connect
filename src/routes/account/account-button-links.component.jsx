import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AccountButtonLinks = () => {
  const { role } = useGetCurrentUserSelectors();
  const { adminButtons, catteryOwnerButtons } = useNavigateToRoute();

  return (
    <>
      {!role ? null : role === "admin" ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: adminButtons }} />
        </ParentDiv>
      ) : role === "owner" ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: catteryOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <p>customer account buttons go here.</p>
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
