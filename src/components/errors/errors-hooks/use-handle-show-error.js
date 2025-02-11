import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";
import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

const useHandleShowError = () => {
  const { getAllCustomersError } = useGetAllCustomerSelectors();
  const { getAllCatsError, getCatsOwnerDetailsError } =
    useGetAllCatsSelectors();
  const { allUsersCatteryIdsAndOwnerNameError } = useGetAllUsersSelectors();
  const { catteryAllowsLargerPensError } = useGetDbManageAddBookingSelectors();
  const { allUsersError } = useGetAllUsersSelectors();

  const showErrorHeading = () => {
    if (getAllCustomersError) return "failed to fetch your customers.";
    if (getAllCatsError) return "failed to fetch your cats list.";
    if (getCatsOwnerDetailsError)
      return "failed to fetch the cat owner's details.";
    if (allUsersCatteryIdsAndOwnerNameError)
      return "failed to fetch user cattery ids.";
    if (catteryAllowsLargerPensError)
      return `failed to fetch critical data for booking process ( getAllowsLargerPensBoolAsync)`;
    if (allUsersError) return "failed to fetch your users list";
  };

  const errorToDisplay = () => {
    const errors = [
      getAllCustomersError,
      getAllCatsError,
      getCatsOwnerDetailsError,
      allUsersCatteryIdsAndOwnerNameError,
      catteryAllowsLargerPensError,
      allUsersError,
    ];
    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
