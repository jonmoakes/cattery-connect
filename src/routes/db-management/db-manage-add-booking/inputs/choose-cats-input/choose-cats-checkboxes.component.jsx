import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useAddBookingVariables from "../../db-manage-add-booking-hooks/use-add-booking-variables";
import useHandleChooseCatsChange from "./choose-cats-input-hooks/use-handle-choose-cats-change";

import OneCatInfo from "./one-cat-info.component";

import { OptionsLabel, WhiteText } from "../../../../../styles/p/p.styles";
import { InnerFormDiv } from "../../../../../styles/div/div.styles";
import { StyledCheckbox } from "../../../../../styles/form/form.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";

const ChooseCatCheckboxes = () => {
  const { dbManageAddBookingData } = useGetDbManageAddBookingSelectors();
  const { customerHasOneCat, catsToRender, customerHasMoreThanOneCat } =
    useAddBookingVariables();
  const { handleChooseCatsChange } = useHandleChooseCatsChange();

  return (
    <>
      {customerHasOneCat ? (
        <OneCatInfo {...{ catsToRender }} />
      ) : customerHasMoreThanOneCat ? (
        <>
          <WhiteText>
            <Balancer>
              please tap the square boxes to select which cats are going to be
              in the booking:
            </Balancer>
          </WhiteText>
          <BlackHr />

          {catsToRender.map((cat) => {
            const { catsId, catsName } = cat;

            return (
              <InnerFormDiv key={catsId} className="cat-choice">
                <OptionsLabel className="over-bg">{catsName}</OptionsLabel>
                <StyledCheckbox
                  onChange={handleChooseCatsChange}
                  className="multiple"
                  type="checkbox"
                  id={catsName}
                  name={catsName}
                  checked={
                    dbManageAddBookingData.catsInBooking?.includes(catsName) ||
                    false
                  }
                />
              </InnerFormDiv>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ChooseCatCheckboxes;
