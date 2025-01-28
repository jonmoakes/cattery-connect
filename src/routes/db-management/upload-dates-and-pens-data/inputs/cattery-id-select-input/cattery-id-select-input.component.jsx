import useGetAllUsersSelectors from "../../../../../hooks/selectors/use-get-all-users-selectors";

import { StyledSelect } from "../../../../../styles/form/form.styles";

import useHandleCatteryIdChange from "./cattery-id-select-input-hooks/use-handle-cattery-id-change";
import useResetSelectedCatteryIdInUiUseEffect from "./cattery-id-select-input-hooks/use-reset-selected-cattery-id-in-ui-use-effect";

const CatteryIdSelectInput = () => {
  const { allUsersCatteryIdsAndOwnerName } = useGetAllUsersSelectors();
  const { handleCatteryIdChange, catteryOwnersName, setCatteryOwnersName } =
    useHandleCatteryIdChange();

  useResetSelectedCatteryIdInUiUseEffect(
    catteryOwnersName,
    setCatteryOwnersName
  );

  return (
    <StyledSelect
      className="lowercase"
      value={catteryOwnersName}
      onChange={handleCatteryIdChange}
    >
      <option value="">-- Select a Cattery Id --</option>
      {allUsersCatteryIdsAndOwnerName.map((catteryDetails) => {
        const { catteryId, name } = catteryDetails;
        return (
          <option key={catteryId} value={name}>
            {`${catteryId} - ${name}`}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default CatteryIdSelectInput;
