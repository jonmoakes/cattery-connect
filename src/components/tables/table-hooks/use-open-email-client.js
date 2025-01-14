import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { getCatteryName } from "../../../functions/get-cattery-name";

const useOpenEmailClient = (value) => {
  const { catteryId } = useGetCurrentUserSelectors();

  const subject = encodeURIComponent(
    `Message From ${
      getCatteryName(catteryId) === undefined
        ? "Your Cattery"
        : getCatteryName(catteryId)
    }`
  );

  const openEmailClient = () => {
    window.location.href = `mailto:${value}?Subject=${subject}`;
  };

  return { openEmailClient };
};

export default useOpenEmailClient;
