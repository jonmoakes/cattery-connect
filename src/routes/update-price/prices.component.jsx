import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";

import useHandleNewPriceChange from "./hooks/use-handle-new-price-change";
import useUpdatePriceLogic from "./hooks/use-update-price-logic";

import NewPriceInfo from "./new-price-info.component";

import { CentredDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const Prices = () => {
  const { newPricingArrayExists, getCatsTailString } = useUpdatePriceLogic();
  const { newPricingArray } = useGetUpdatePriceSelectors();
  const { handleNewPriceChange } = useHandleNewPriceChange();

  return (
    <>
      {newPricingArrayExists
        ? newPricingArray.map((pricingDetails) => {
            const { numberOfCats, price } = pricingDetails;

            return (
              <CentredDiv key={numberOfCats}>
                <Form className="update-prices">
                  <Label>
                    price per night for {numberOfCats}{" "}
                    {getCatsTailString(numberOfCats)} ( pence )
                  </Label>
                  <StyledInput
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    name={numberOfCats}
                    value={price}
                    onChange={handleNewPriceChange}
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ];
                      const isDigit = /^\d$/.test(e.key);
                      if (!isDigit && !allowedKeys.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onPaste={(e) => {
                      e.preventDefault();
                    }}
                    placeholder="ie 1000 for £10"
                  />
                  <BlackHr />
                  <NewPriceInfo {...{ numberOfCats, price }} />
                </Form>
              </CentredDiv>
            );
          })
        : null}
    </>
  );
};

export default Prices;
