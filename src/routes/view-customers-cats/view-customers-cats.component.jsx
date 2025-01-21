import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";
import useDeleteCatResultSwalUseEffect from "./view-customers-cats-hooks/use-delete-cat-result-swal-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import TitleAndAddCatLink from "./title-and-add-cat-link.component";
import ViewCustomersCatsTable from "./view-customers-cats-table.component";

import { Container } from "../../styles/container/container.styles";

const ViewCustomersCats = () => {
  const { catDetailManagementIsLoading } =
    useGetCatDetailsManagementSelectors();
  useDeleteCatResultSwalUseEffect();

  return (
    <Container>
      {catDetailManagementIsLoading ? (
        <SkeletonBox loadingText="deleting cat..." />
      ) : (
        <>
          <TitleAndAddCatLink />
          <ViewCustomersCatsTable />
        </>
      )}
    </Container>
  );
};

export default ViewCustomersCats;
