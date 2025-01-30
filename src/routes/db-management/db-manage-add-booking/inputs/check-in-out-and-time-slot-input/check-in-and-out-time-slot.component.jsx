import useHandleCheckInAndOutTimeSlotChange from "./check-in-and-out-time-slot-hooks/use-handle-check-in-and-out-time-slot-change";

import {
  InnerFormDiv,
  RadioLabelDiv,
} from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { OptionsLabel } from "../../../../../styles/p/p.styles";
import { timeSlotRadioChoices } from "./time-slot-radio-choices";

const CheckInAndOutTimeSlot = ({ condition, slotType, showHr }) => {
  const { handleChooseCheckInAndOutTimeSlotChange } =
    useHandleCheckInAndOutTimeSlotChange();

  const highlightedText = slotType === "checkInSlot" ? "check in" : "check out";

  return (
    <>
      {condition ? (
        <>
          {showHr ? <BlackHr /> : null}
          <RadioLabelDiv>
            <OptionsLabel className="white">
              {`tap a circle to choose a `}
              {highlightedText && (
                <span style={{ color: "yellow" }}>{highlightedText}</span>
              )}
              {` slot time:`}
            </OptionsLabel>
          </RadioLabelDiv>

          {condition
            ? timeSlotRadioChoices.map((choice) => {
                const { id, label, value } = choice;
                return (
                  <InnerFormDiv key={id} className="slot-choice">
                    <OptionsLabel className="over-bg">{label}</OptionsLabel>
                    <input
                      type="radio"
                      name={slotType}
                      value={value}
                      onChange={(event) =>
                        handleChooseCheckInAndOutTimeSlotChange(event, slotType)
                      }
                      required
                    />
                    <hr />
                  </InnerFormDiv>
                );
              })
            : null}
        </>
      ) : null}
    </>
  );
};

export default CheckInAndOutTimeSlot;
