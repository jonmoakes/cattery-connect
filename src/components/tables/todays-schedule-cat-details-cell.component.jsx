import { BlackHr } from "../../styles/hr/hr.styles";
import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

const TodaysScheduleCatsDetailCell = ({ value }) => (
  <>
    {value.map((cat, index) => {
      const { catsId, catsName, catsFeedingInfo, catsMedicalInfo } = cat;
      return (
        <div key={catsId}>
          {index === 0 && <BlackHr />}

          <CustomBalancedText>
            <CustomSpan type="underline">cats Name:</CustomSpan>

            <br />
            {catsName}
          </CustomBalancedText>

          <CustomBalancedText>
            <CustomSpan type="underline">feeding info:</CustomSpan>

            <br />
            {catsFeedingInfo}
          </CustomBalancedText>

          <CustomBalancedText>
            <CustomSpan type="underline">medical info:</CustomSpan>

            <br />
            {catsMedicalInfo ? (
              <CustomSpan>{catsMedicalInfo}</CustomSpan>
            ) : (
              "no medical info given"
            )}
          </CustomBalancedText>

          <BlackHr />
        </div>
      );
    })}
  </>
);

export default TodaysScheduleCatsDetailCell;
