import { Fragment } from "react";

import useGetCatteryDetailsSelectors from "../../hooks/selectors/use-get-cattery-details-selectors";
import useCatteryDetailsFunctions from "./hooks/use-cattery-details-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import Values from "./values.component";

import { ParentDiv, DataDetailsDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { getCatsTailString } from "../../functions/get-cats-tail-string";

const CatteryDetailsMap = () => {
  const { catteryDetailsFoUi, pricingArray, chargesByDay } =
    useGetCatteryDetailsSelectors();
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
        <CustomBalancedText>
          <CustomSpan className="red">current prices</CustomSpan> <br />( at
          time of page load ).
        </CustomBalancedText>

        {pricingArray
          ? pricingArray.map((pricingDetails) => {
              const { numberOfCats, price } = pricingDetails;

              return (
                <div key={numberOfCats}>
                  <p>
                    price per {chargesByDay ? "day" : "night"} for{" "}
                    {numberOfCats} {getCatsTailString(numberOfCats)}
                  </p>
                  <p>£{(price / 100).toFixed(2)}</p>
                  <BlackHr />
                </div>
              );
            })
          : null}
      </DataDetailsDiv>
    </ParentDiv>
  );
};

export default CatteryDetailsMap;
