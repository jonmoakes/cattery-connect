import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import useGetAllUsersSelectors from "../../hooks/selectors/use-get-all-users-selectors";
import useGetAllUsersThunkUseEffect from "../../hooks/use-get-all-users-thunk-use-effect";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import AllUsersTable from "./all-users-table.component";

const AllUsers = () => {
  const { allUsersIsLoading } = useGetAllUsersSelectors();
  useGetAllUsersThunkUseEffect();

  return (
    <Container>
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
