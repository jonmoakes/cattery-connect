import useGetDeleteDatesSelectors from "../../hooks/selectors/use-get-delete-dates-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import FetchDataSummary from "./fetch-data-summary.component";

import { Button } from "../../styles/button/button.styles";

const GetDatesToDeleteButton = () => {
  const { year } = useGetDeleteDatesSelectors();

  return (
    <>
      {year ? (
        <>
          <FetchDataSummary />
          <CustomBalancedText>
            if this is correct, tap the button below.
          </CustomBalancedText>
          <Button type="submit">get dates to delete</Button>
        </>
      ) : null}
    </>
  );
};

export default GetDatesToDeleteButton;
