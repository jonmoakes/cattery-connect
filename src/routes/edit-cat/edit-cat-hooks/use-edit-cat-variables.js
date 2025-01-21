import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

const useEditCatVariables = () => {
  const { catDetailManagementIsLoading, catDetails } =
    useGetCatDetailsManagementSelectors();

  const { catsName } = catDetails;

  return { catDetailManagementIsLoading, catsName };
};

export default useEditCatVariables;
