import useGetAllCustomersSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

const useHandleShowError = () => {
  const { getAllCustomersError } = useGetAllCustomersSelectors();

  const showErrorHeading = () => {
    if (getAllCustomersError) return "failed to fetch your customers.";
  };

  const errorToDisplay = () => {
    const errors = [getAllCustomersError];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
