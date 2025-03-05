import { format } from "date-fns";
import { BlackHr } from "../../styles/hr/hr.styles";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import { DataDiv, ErrorDiv } from "../../styles/div/div.styles";

const PenAvailabilitySection = ({ title, penData, chosenDate }) => (
  <>
    {!penData?.length ? (
      <>
        <ErrorDiv className="margin red">
          <CustomBalancedText>
            no pen data found for the {title} pens on this date...
          </CustomBalancedText>
        </ErrorDiv>
      </>
    ) : (
      <DataDiv className={title}>
        <CustomBalancedText>
          {title} pens data for
          <br />
          <CustomSpan className="white">
            {format(chosenDate, "EEE dd MMMM yyyy")}
          </CustomSpan>
        </CustomBalancedText>

        {penData.map(({ penCapacity, available }, index) => (
          <div key={penCapacity}>
            {index === 0 ? <BlackHr /> : null}

            {penCapacity === "any" ? null : (
              <CustomBalancedText>
                pen capacity:{" "}
                <CustomSpan className="yellow">
                  {penCapacity === 2 ? "1 or 2" : penCapacity}
                </CustomSpan>
              </CustomBalancedText>
            )}

            <CustomBalancedText>
              available pens:{" "}
              {Number(available) === 0 ? (
                <CustomSpan className="bright-red">{available}</CustomSpan>
              ) : Number(available) >= 1 && Number(available) <= 5 ? (
                <CustomSpan className="orange">{available}</CustomSpan>
              ) : (
                <CustomSpan className="green">{available}</CustomSpan>
              )}
            </CustomBalancedText>
            <BlackHr />
          </div>
        ))}
      </DataDiv>
    )}
  </>
);

export default PenAvailabilitySection;
