import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useFetchAllCatsThunkUseEffect from "./all-cats-hooks/use-fetch-all-cats-thunk-use-effect";
import useFetchCatsOwnerDetailsThunkUseEffect from "./all-cats-hooks/use-fetch-cats-owner-details-thunk-use-effect";
// import useDeleteCatResultSwalUseEffect from "../view-customers-cats/view-customers-cats-hooks/use-delete-cat-result-swal-use-effect";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import AllCatsTable from "./all-cats-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import Balancer from "react-wrap-balancer";

const AllCats = () => {
  const {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    hasCatsOwnerDetails,
    selectedCatsName,
  } = useAllCatsTableVariables();
  useFetchAllCatsThunkUseEffect();
  useFetchCatsOwnerDetailsThunkUseEffect();
  // useDeleteCatResultSwalUseEffect();

  return (
    <Container>
      <>
        <ParentDiv>
          <h1>
            <Balancer>
              {!hasCatsOwnerDetails
                ? "all cats"
                : `${selectedCatsName}'s owner details`}
            </Balancer>
          </h1>
        </ParentDiv>

        {getAllCatsIsLoading || fetchOwnerDetailsIsLoading ? (
          <>
            <SkeletonBox
              loadingText={
                getAllCatsIsLoading
                  ? "Fetching Cats..."
                  : "Fetching Owner Details..."
              }
            />
          </>
        ) : (
          <AllCatsTable />
        )}
      </>
    </Container>
  );
};

export default AllCats;
