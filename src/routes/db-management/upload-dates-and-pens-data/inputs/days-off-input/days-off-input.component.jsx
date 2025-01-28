import useGetUploadDatesAndPensDataSelectors from "../../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import useHandleDayOffToAddChange from "./days-off-input-hooks/use-handle-day-off-to-add-change";
import useConfirmAddDayOff from "./days-off-input-hooks/use-confirm-add-day-off";

import DisplayCurrentlyChosenDaysOff from "./display-currently-chosen-days-off.component";

import { Label, StyledInput } from "../../../../../styles/form/form.styles";
import { MinimalButton } from "../../../../../styles/button/button.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { YellowText } from "../../../../../styles/p/p.styles";

const DaysOffInput = () => {
  const { datesIncludeDaysClosed, dateClosedToAdd } =
    useGetUploadDatesAndPensDataSelectors();
  const { handleDayOffToAddChange } = useHandleDayOffToAddChange();
  const { confirmAddDayOff } = useConfirmAddDayOff();

  return (
    <>
      {datesIncludeDaysClosed === "yes" ? (
        <>
          <Label>date closed:</Label>
          <StyledInput
            type="text"
            onChange={handleDayOffToAddChange}
            value={dateClosedToAdd}
            placeholder="YYYY-MM-DD"
          />

          {dateClosedToAdd.length === 10 ? (
            <>
              <MinimalButton
                type="button"
                className="margin animate"
                onClick={confirmAddDayOff}
              >
                Add day off
              </MinimalButton>
              <BlackHr />
            </>
          ) : dateClosedToAdd.length > 10 ? (
            <YellowText>date string is too long..</YellowText>
          ) : null}

          <DisplayCurrentlyChosenDaysOff />
        </>
      ) : null}
    </>
  );
};

export default DaysOffInput;
