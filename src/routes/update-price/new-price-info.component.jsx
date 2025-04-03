import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { BlackHr } from "../../styles/hr/hr.styles";

const NewPriceInfo = () => {
  const { newPrice } = useGetUpdatePriceSelectors();

  return (
    <>
      {newPrice ? (
        <>
          <BlackHr />
          <CustomBalancedText>
            the new price per night will be:
          </CustomBalancedText>
          <CustomBalancedText type="h3">
            <CustomSpan className="red">
              £{(newPrice / 100).toFixed(2)}
            </CustomSpan>
          </CustomBalancedText>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default NewPriceInfo;
