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
import CustomSpan from "../../../components/custom-span/custom-span.component";

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
          <CustomBalancedText className="white">
            For the date range that you are going to select, Does this cattery
            have any days that you{" "}
            <CustomSpan type="uppercase" className="red">
              do not
            </CustomSpan>{" "}
            want to include in the upload?
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
        </>
      )}
    </>
  );
};

export default ClosedDatesQuestion;
