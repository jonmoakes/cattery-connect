import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

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
            <h3>customer & cat info</h3>
            <RenderButtonsList {...{ buttons: catteryOwnerButtons }} />
          </ParentDiv>

          <ParentDiv>
            <h3>other options</h3>
            <RenderButtonsList
              {...{ buttons: catteryOwnerCustomerDataButtons }}
            />
          </ParentDiv>
        </>
      ) : (
        <ParentDiv>
          <p>customer account buttons go here.</p>
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
