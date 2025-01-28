import { useEffect } from "react";

import useGetUploadDatesAndPensDataSelectors from "../../../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

const useResetSelectedCatteryIdInUiUseEffect = (
  catteryOwnersName,
  setCatteryOwnersName
) => {
  const { datesAndPensData } = useGetUploadDatesAndPensDataSelectors();
  useEffect(() => {
    if (
      (!datesAndPensData || Object.keys(datesAndPensData).length === 0) &&
      catteryOwnersName
    ) {
      setCatteryOwnersName("");
    }
  }, [datesAndPensData, catteryOwnersName, setCatteryOwnersName]);
};

export default useResetSelectedCatteryIdInUiUseEffect;
