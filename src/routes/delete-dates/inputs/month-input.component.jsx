import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

import { Label, StyledSelect } from "../../../styles/form/form.styles";

const MonthInput = ({ handleDateDataToPassChange }) => {
  const { catteryId, month } = useGetDeleteDatesSelectors();

  return (
    <>
      {catteryId ? (
        <>
          <Label>month</Label>

          <StyledSelect
            name="month"
            value={month || ""}
            onChange={handleDateDataToPassChange}
          >
            <option value="" disabled>
              -- Select Month --
            </option>
            {Array.from({ length: 12 }, (_, i) => {
              const val = String(i + 1).padStart(2, "0");
              return (
                <option key={val} value={val}>
                  {val}
                </option>
              );
            })}
          </StyledSelect>
        </>
      ) : null}
    </>
  );
};

export default MonthInput;
