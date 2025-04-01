import useGetAllUsersSelectors from "../../hooks/selectors/use-get-all-users-selectors";
import useGetAllUsersThunkUseEffect from "../../hooks/use-get-all-users-thunk-use-effect";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import Metadata from "../../components/metadata/metadata.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import AllUsersTable from "./all-users-table.component";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AllUsers = () => {
  const { allUsersIsLoading } = useGetAllUsersSelectors();
  useGetAllUsersThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - All Users"
        description="View the details of all owners registered in your app."
      />

      {allUsersIsLoading ? (
        <SkeletonBox loadingText="fetching users..." />
      ) : (
        <>
          <ParentDiv>
            <CustomBalancedText type="h1">all users</CustomBalancedText>
          </ParentDiv>
          <AllUsersTable />
        </>
      )}
    </Container>
  );
};

export default AllUsers;
