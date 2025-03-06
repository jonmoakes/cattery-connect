import { useDispatch } from "react-redux";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { Label, StyledSelect } from "../../../styles/form/form.styles";
import { setUploadBookingData } from "../../../store/upload-booking-data/upload-booking-data.slice";

const PaymentStatusSelectInput = ({ condition, paymentStatus }) => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const dispatch = useDispatch();

  const values = ["complete", "incomplete"];

  const handlePaymentStatusChange = (e) => {
    dispatch(
      setUploadBookingData({
        ...uploadBookingData,
        paymentStatus: e.target.value,
      })
    );
  };

  return (
    <>
      {condition ? (
        <>
          <Label>payment status:</Label>

          <StyledSelect
            value={paymentStatus || ""}
            onChange={handlePaymentStatusChange}
          >
            <option style={{ textTransform: "capitalize" }} value="" disabled>
              -- Tap to select --
            </option>
            {values.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </StyledSelect>
        </>
      ) : null}
    </>
  );
};

export default PaymentStatusSelectInput;
