import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import {
  resetDateClosedToAdd,
  resetDatesClosedArray,
} from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../../../styles/button/button.styles";
import { format } from "date-fns";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const DisplayCurrentlyChosenDaysOff = () => {
  const { datesClosedArray, dateClosedToAdd } =
    useGetUploadDatesAndPensDataSelectors();

  const dispatch = useDispatch();

  const resetDatesClosedData = () => {
    if (dateClosedToAdd) {
      dispatch(resetDateClosedToAdd());
    }
    dispatch(resetDatesClosedArray());
  };

  return (
    <>
      {datesClosedArray && datesClosedArray.length ? (
        <>
          <BlackHr />
          <CustomBalancedText className="white">
            current days off you have selected:
          </CustomBalancedText>

          {datesClosedArray.map((dateClosed) => (
            <CustomBalancedText className="yellow" key={dateClosed}>
              {format(dateClosed, "EEEE dd MMMM yyyy")}
            </CustomBalancedText>
          ))}

          <BlackHr />

          <MinimalButton
            className="margin"
            type="button"
            onClick={resetDatesClosedData}
          >
            reset days off
          </MinimalButton>
        </>
      ) : null}
    </>
  );
};

export default DisplayCurrentlyChosenDaysOff;
