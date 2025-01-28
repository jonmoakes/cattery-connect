import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import {
  resetDateClosedToAdd,
  resetDatesClosedArray,
} from "../../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import { MinimalButton } from "../../../../../styles/button/button.styles";
import { format } from "date-fns";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { WhiteText, YellowText } from "../../../../../styles/p/p.styles";
import Balancer from "react-wrap-balancer";

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
          <WhiteText>
            <Balancer>current days off you have selected:</Balancer>
          </WhiteText>
          {datesClosedArray.map((dateClosed) => (
            <YellowText key={dateClosed}>
              {format(dateClosed, "EEEE dd MMMM yyyy")}
            </YellowText>
          ))}
          <BlackHr />
          <MinimalButton
            className="margin"
            type="button"
            onClick={resetDatesClosedData}
          >
            reset days off
          </MinimalButton>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default DisplayCurrentlyChosenDaysOff;
