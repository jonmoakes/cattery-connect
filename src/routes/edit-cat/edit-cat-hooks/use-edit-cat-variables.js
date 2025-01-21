import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";

const useEditCatVariables = () => {
  const { catDetailManagementIsLoading } =
    useGetCatDetailsManagementSelectors();
  const { dataToBePassed } = useGetDataToBePassedSelectors();
  const { catToEdit } = dataToBePassed ?? {};

  const { catsName } = catToEdit ?? "";

  console.log(catToEdit);

  return { catDetailManagementIsLoading, catsName, catToEdit };
};

export default useEditCatVariables;
