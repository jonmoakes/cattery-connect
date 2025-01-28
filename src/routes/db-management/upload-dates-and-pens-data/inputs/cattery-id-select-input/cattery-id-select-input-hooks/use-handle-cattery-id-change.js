import { useState } from "react";
import { useDispatch } from "react-redux";
import useGetUploadDatesAndPensDataSelectors from "../../../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import { setDateAndPensData } from "../../../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";
import useGetAllUsersSelectors from "../../../../../../hooks/selectors/use-get-all-users-selectors";

const useHandleCatteryIdChange = () => {
  const { datesAndPensData } = useGetUploadDatesAndPensDataSelectors();
  const { allUsersCatteryIdsAndOwnerName } = useGetAllUsersSelectors();

  const [catteryOwnersName, setCatteryOwnersName] = useState("");

  const dispatch = useDispatch();

  const handleCatteryIdChange = (e) => {
    const selectedCatteryIdAndNameObject = allUsersCatteryIdsAndOwnerName.find(
      (data) => data.name === e.target.value
    );

    setCatteryOwnersName(selectedCatteryIdAndNameObject?.name || "");

    dispatch(
      setDateAndPensData({
        ...datesAndPensData,
        catteryId: selectedCatteryIdAndNameObject?.catteryId || "",
      })
    );
  };

  return { handleCatteryIdChange, catteryOwnersName, setCatteryOwnersName };
};

export default useHandleCatteryIdChange;
