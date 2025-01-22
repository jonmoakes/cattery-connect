import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";
import useGetAllCustomersSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

const useHandleShowError = () => {
  const { getAllCustomersError } = useGetAllCustomersSelectors();
  const { getAllCatsError, getCatsOwnerDetailsError } =
    useGetAllCatsSelectors();

  const showErrorHeading = () => {
    if (getAllCustomersError) return "failed to fetch your customers.";
    if (getAllCatsError) return "failed to fetch your cats list.";
    if (getCatsOwnerDetailsError)
      return "failed to fetch the cat owner's details.";
  };

  const errorToDisplay = () => {
    const errors = [
      getAllCustomersError,
      getAllCatsError,
      getCatsOwnerDetailsError,
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
