import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import {
  resetDateClosedToAdd,
  resetDatesClosedArray,
  setDatesIncludeDatesClosed,
} from "../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../../styles/button/button.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ClosedDatesQuestion = () => {
  const {
    catteryId,
    datesClosedArray,
    dateClosedToAdd,
    datesIncludeDaysClosed,
  } = useGetUploadDatesAndPensDataSelectors();
  const dispatch = useDispatch();

  const resetQuestionToNoState = () => {
    if (datesClosedArray.length) {
      dispatch(resetDatesClosedArray());
    }
    if (dateClosedToAdd) {
      dispatch(resetDateClosedToAdd());
    }
    dispatch(setDatesIncludeDatesClosed("no"));
  };

  const isSelected = (choice) => datesIncludeDaysClosed === choice;

  return (
    <>
      {catteryId && (
        <>
          <BlackHr />
          <CustomBalancedText color="white">
            Does this cattery have any days that it is not open in the days that
            you want to upload?
          </CustomBalancedText>

          <MinimalButton
            className={`margin animate ${isSelected("yes") ? "selected" : ""}`}
            type="button"
            onClick={() => dispatch(setDatesIncludeDatesClosed("yes"))}
          >
            {`yes ${isSelected("yes") ? "✔️" : ""}`}
          </MinimalButton>

          <MinimalButton
            className={`margin animate ${isSelected("no") ? "selected" : ""}`}
            type="button"
            onClick={resetQuestionToNoState}
          >
            {`no ${isSelected("no") ? "✔️" : ""}`}
          </MinimalButton>
          <BlackHr />
        </>
      )}
    </>
  );
};

export default ClosedDatesQuestion;
