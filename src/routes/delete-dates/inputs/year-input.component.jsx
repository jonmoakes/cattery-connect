import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";
import useGenerateYearRange from "../hooks/use-generate-year-range";

import { Label, StyledSelect } from "../../../styles/form/form.styles";

const YearInput = ({ handleDateDataToPassChange }) => {
  const { month, year } = useGetDeleteDatesSelectors();
  const { yearRange } = useGenerateYearRange();

  return (
    <>
      {month ? (
        <>
          <Label>year</Label>

          <StyledSelect
            name="year"
            value={year || ""}
            onChange={handleDateDataToPassChange}
          >
            <option value="" disabled>
              -- Select Year --
            </option>
            {yearRange.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </StyledSelect>
        </>
      ) : null}
    </>
  );
};

export default YearInput;
