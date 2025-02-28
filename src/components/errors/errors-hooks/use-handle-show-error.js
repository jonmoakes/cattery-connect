import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";
import useGetBookingsSelectors from "../../../hooks/selectors/use-get-bookings-selectors";
import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";
import useGetTodaysScheduleSelectors from "../../../hooks/selectors/use-get-todays-schedule-selectors";

const useHandleShowError = () => {
  const { getAllCustomersError } = useGetAllCustomerSelectors();
  const { getAllCatsError, getCatsOwnerDetailsError } =
    useGetAllCatsSelectors();
  const { allUsersCatteryIdsAndOwnerNameError } = useGetAllUsersSelectors();
  const { requiredCatteryDataError } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { allUsersError } = useGetAllUsersSelectors();
  const { fetchOwnerBookingsError } = useGetBookingsSelectors();
  const { fetchAvailabilityDocsToUpdateError } = useGetCancelBookingSelectors();
  const { individualCustomersCatsError } =
    useGetIndividualCustomersCatsSelectors();
  const { todaysBookingsDataError } = useGetTodaysScheduleSelectors();

  const showErrorHeading = () => {
    if (getAllCustomersError) return "failed to fetch your customers.";
    if (getAllCatsError) return "failed to fetch all cats.";
    if (getCatsOwnerDetailsError)
      return "failed to fetch the cat owner's details.";
    if (allUsersCatteryIdsAndOwnerNameError)
      return "failed to fetch user cattery ids.";
    if (requiredCatteryDataError) return `fetch cattery data thunk Error.`;
    if (allUsersError) return "failed to fetch your users list.";
    if (fetchOwnerBookingsError) return "failed to fetch your bookings.";
    if (fetchAvailabilityDocsToUpdateError)
      return `failed to pen data. 
( fetch Availability Docs )`;
    if (individualCustomersCatsError) return "failed to fetch customers cats.";
    if (todaysBookingsDataError) return "fetch todays bookings thunk error";
  };

  const errorToDisplay = () => {
    const errors = [
      getAllCustomersError,
      getAllCatsError,
      getCatsOwnerDetailsError,
      allUsersCatteryIdsAndOwnerNameError,
      requiredCatteryDataError,
      allUsersError,
      fetchOwnerBookingsError,
      fetchAvailabilityDocsToUpdateError,
      individualCustomersCatsError,
      todaysBookingsDataError,
    ];
    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
