import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";
import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

import { StyledSelect } from "../../../styles/form/form.styles";

const CatteryIdSelectInput = ({ handleDateDataToPassChange }) => {
  const { allUsersCatteryIdsAndOwnerName } = useGetAllUsersSelectors();
  const { catteryId } = useGetDeleteDatesSelectors();

  return (
    <StyledSelect
      value={catteryId ?? ""}
      name="catteryId"
      onChange={handleDateDataToPassChange}
    >
      <option value="" disabled>
        -- Select a Cattery Id --
      </option>
      {allUsersCatteryIdsAndOwnerName.map((catteryDetails) => {
        const { catteryId, name } = catteryDetails;
        return (
          <option key={catteryId} value={catteryId}>
            {`${catteryId} - ${name}`}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default CatteryIdSelectInput;
