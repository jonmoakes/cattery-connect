import useGetDeleteDatesSelectors from "../../hooks/selectors/use-get-delete-dates-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ResetStateButton from "./reset-state-button.component";

import { BlackHr } from "../../styles/hr/hr.styles";
import { Button } from "../../styles/button/button.styles";
import useConfirmDeleteDateDocuments from "./hooks/use-confirm-delete-date-documents";

const ReturnedDates = () => {
  const { dateDocumentsToDelete } = useGetDeleteDatesSelectors();
  const { confirmDeleteDateDocuments } = useConfirmDeleteDateDocuments();

  return (
    <>
      <CustomBalancedText>we got the following dates back:</CustomBalancedText>

      {dateDocumentsToDelete.map((doc) => (
        <div key={doc.date}>
          <CustomBalancedText>{doc.date}</CustomBalancedText>
        </div>
      ))}

      <BlackHr />

      <Button
        type="button"
        className="teal"
        onClick={confirmDeleteDateDocuments}
      >
        delete dates
      </Button>
      <BlackHr />

      <CustomBalancedText>not correct?</CustomBalancedText>
      <ResetStateButton />
      <BlackHr />
    </>
  );
};

export default ReturnedDates;
