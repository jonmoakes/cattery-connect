import useConfirmUpdatePaymentStatus from "./table-hooks/use-confirm-update-payment-status";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";

const UpdatePaymentStatusCell = ({ value, documentId }) => {
  const { confirmUpdatePaymentStatus } = useConfirmUpdatePaymentStatus();

  return (
    <>
      <CustomBalancedText className={value === "incomplete" ? "red" : ""}>
        {value}
      </CustomBalancedText>

      {value === "incomplete" ? (
        <MinimalButton
          type="button"
          className="update"
          onClick={() => confirmUpdatePaymentStatus(value, documentId)}
        >
          update status
        </MinimalButton>
      ) : null}
    </>
  );
};

export default UpdatePaymentStatusCell;
