import useConfirmUpdatePaymentStatus from "./table-hooks/use-confirm-update-payment-status";

import { MinimalButton, PlainButton } from "../../styles/button/button.styles";
import { useState } from "react";

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
        {value}
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
