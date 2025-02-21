import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useAddBookingVariables from "../../add-booking-hooks/use-add-booking-variables";
import useHandleChooseCatsChange from "./choose-cats-input-hooks/use-handle-choose-cats-change";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import OneCatInfo from "./one-cat-info.component";

import { InnerFormDiv } from "../../../../styles/div/div.styles";
import { StyledCheckbox } from "../../../../styles/form/form.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const ChooseCatCheckboxes = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { customerHasOneCat, catsToRender, customerHasMoreThanOneCat } =
    useAddBookingVariables();
  const { handleChooseCatsChange } = useHandleChooseCatsChange();

  return (
    <>
      {customerHasOneCat ? (
        <OneCatInfo {...{ catsToRender }} />
      ) : customerHasMoreThanOneCat ? (
        <>
          <CustomBalancedText className="white">
            please tap the square boxes to select which cats are going to be in
            the booking:
          </CustomBalancedText>
          <BlackHr />

          {catsToRender.map((cat, index) => {
            const { catsId, catsName } = cat;

            return (
              <InnerFormDiv key={catsId} {...{ index }} className="cat-choice">
                <CustomBalancedText type="optionsLabel" className="over-bg">
                  {catsName}
                </CustomBalancedText>
                <StyledCheckbox
                  onChange={handleChooseCatsChange}
                  className="multiple"
                  type="checkbox"
                  id={catsName}
                  name={catsName}
                  checked={
                    uploadBookingData.catsInBooking?.includes(catsName) || false
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
