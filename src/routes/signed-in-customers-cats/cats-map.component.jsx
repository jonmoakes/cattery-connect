import { Fragment } from "react";
import useSignedInCustomersCatsVariables from "./hooks/use-signed-in-customers-cats-variables";
import useSignedInCustomersCatsFunctions from "./hooks/use-signed-in-customers-cats-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { DataDetailsDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const CatsMap = () => {
  const { filteredCatData, orderedKeys } = useSignedInCustomersCatsVariables();
  const { getLabel } = useSignedInCustomersCatsFunctions();

  return (
    <>
      {filteredCatData.map((item) => (
        <DataDetailsDiv key={item.catsId} className="cats">
          {orderedKeys.map(
            (key) =>
              item[key] && ( // Only display the key if it exists in the item
                <Fragment key={key}>
                  <CustomBalancedText>
                    <CustomSpan className="red">{getLabel(key)}:</CustomSpan>
                    <br />
                    {key === "email" ? (
                      <CustomSpan type="lowercase">{item[key]}</CustomSpan>
                    ) : (
                      item[key]
                    )}
                  </CustomBalancedText>
                  <BlackHr />
                </Fragment>
              )
          )}
        </DataDetailsDiv>
      ))}
    </>
  );
};

export default CatsMap;
