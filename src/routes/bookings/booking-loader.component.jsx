import useGetBookingsSelectors from "../../hooks/selectors/use-get-bookings-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

const BookingsLoader = () => {
  const { fetchOwnerBookingsIsLoading, updatePaymentStatusIsLoading } =
    useGetBookingsSelectors();

  return (
    <>
      {fetchOwnerBookingsIsLoading || updatePaymentStatusIsLoading ? (
        <SkeletonBox
          loadingText={
            fetchOwnerBookingsIsLoading
              ? "fetching bookings..."
              : "updating status..."
          }
        />
      ) : null}
    </>
  );
};

export default BookingsLoader;
