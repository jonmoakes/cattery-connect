import useAllCatsDeleteListener from "./all-cats-hooks/use-all-cats-delete-listener";
import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useFetchAllCatsThunkUseEffect from "./all-cats-hooks/use-fetch-all-cats-thunk-use-effect";
import useGetAllCustomersThunkUseEffect from "../../hooks/use-get-all-customers-thunk-use-effect";
import useFetchCatsOwnerDetailsThunkUseEffect from "./all-cats-hooks/use-fetch-cats-owner-details-thunk-use-effect";
import useDeleteCatResultSwalUseEffect from "../../hooks/delete-cat/use-delete-cat-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import AllCatsTitle from "./all-cats-title.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import AllCatsTable from "./all-cats-table.component";

import { Container } from "../../styles/container/container.styles";

const AllCats = () => {
  useAllCatsDeleteListener();

  const {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    catDetailManagementIsLoading,
  } = useAllCatsTableVariables();
  useGetAllCustomersThunkUseEffect();
  useFetchAllCatsThunkUseEffect();
  useFetchCatsOwnerDetailsThunkUseEffect();
  useDeleteCatResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - All Cats"
        description="View and manage all cats registered in your cattery. Easily access cat profiles, details, and owner info."
      />
      <>
        <AllCatsTitle />

        {getAllCatsIsLoading ||
        fetchOwnerDetailsIsLoading ||
        catDetailManagementIsLoading ? (
          <>
            <SkeletonBox
              loadingText={
                getAllCatsIsLoading
                  ? "Fetching Cats..."
                  : fetchOwnerDetailsIsLoading
                  ? "Fetching Owner Details..."
                  : "Deleting Cat"
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
