import useHandleCheckInAndOutTimeSlotChange from "./check-in-and-out-time-slot-hooks/use-handle-check-in-and-out-time-slot-change";

import CustomSpan from "../../../../../components/custom-span/custom-span.component";
import CustomBalancedText from "../../../../../components/custom-balanced-text/custom-balanced-text.component";

import {
  InnerFormDiv,
  RadioLabelDiv,
} from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { timeSlotRadioChoices } from "./time-slot-radio-choices";

const CheckInAndOutTimeSlot = ({
  slotType,
  checkInSlot,
  checkOutSlot,
  condition,
  showHr,
}) => {
  const { handleChooseCheckInAndOutTimeSlotChange } =
    useHandleCheckInAndOutTimeSlotChange();

  const selectedValue = slotType === "checkInSlot" ? checkInSlot : checkOutSlot;
  const highlightedText =
    slotType === "checkInSlot" ? "check in slot time:" : "check out slot time:";

  return (
    <>
      {condition ? (
        <>
          {showHr ? <BlackHr /> : null}
          <RadioLabelDiv>
            <CustomBalancedText type="optionsLabel">
              {`tap a circle to choose a `}
              {highlightedText && (
                <CustomSpan className="yellow">{highlightedText}</CustomSpan>
              )}
            </CustomBalancedText>
          </RadioLabelDiv>

          {condition
            ? timeSlotRadioChoices.map((choice, index) => {
                const { id, label, value } = choice;
                return (
                  <InnerFormDiv key={id} {...{ index }} className="slot-choice">
                    <CustomBalancedText type="optionsLabel" className="over-bg">
                      {label}
                    </CustomBalancedText>

                    <input
                      type="radio"
                      name={slotType}
                      value={value}
                      checked={selectedValue === value}
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
