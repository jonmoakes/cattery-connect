import useConfirmUpdatePaymentStatus from "./table-hooks/use-confirm-update-payment-status";

import { MinimalButton, PlainButton } from "../../styles/button/button.styles";
import { useState } from "react";
import CustomSpan from "../custom-span/custom-span.component";

const UpdatePaymentStatusCell = ({ value, documentId }) => {
  const { confirmUpdatePaymentStatus } = useConfirmUpdatePaymentStatus();
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      <PlainButton
        onClick={handleClick}
        className={value === "incomplete" ? "red" : ""}
      >
        <CustomSpan>{value}</CustomSpan>
      </PlainButton>

      {value === "incomplete" || showButton ? (
        <MinimalButton
          type="button"
          className="payment-status"
          onClick={() =>
            confirmUpdatePaymentStatus(value, documentId, setShowButton)
          }
        >
          update status
        </MinimalButton>
      ) : null}
    </>
  );
};

export default UpdatePaymentStatusCell;
