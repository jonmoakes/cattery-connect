import { Fragment } from "react";

import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";
import useCatteryDetailsFunctions from "./hooks/use-cattery-details-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import Values from "./values.component";

import { ParentDiv, DataDetailsDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const CatteryDetailsMap = () => {
  const { catteryDetailsFoUi } = useGetCatteryDetailsSelectors();
  const { getLabel } = useCatteryDetailsFunctions();

  return (
    <ParentDiv>
      <DataDetailsDiv>
        {Object.entries(catteryDetailsFoUi).map(([label, value]) => (
          <Fragment key={label}>
            <CustomBalancedText>
              <CustomSpan className="red">{getLabel(label)}:</CustomSpan>
              <br />
              <Values {...{ label, value }} />
            </CustomBalancedText>
            <BlackHr />
          </Fragment>
        ))}
      </DataDetailsDiv>
    </ParentDiv>
  );
};

export default CatteryDetailsMap;
