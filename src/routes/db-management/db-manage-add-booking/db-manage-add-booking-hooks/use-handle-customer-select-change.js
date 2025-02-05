import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  resetDbManageIsBookingAvailableError,
  resetDbManageIsBookingAvailableResult,
  setDbManageAddBookingData,
  setShowIneligibleDates,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleCustomerSelectChange = () => {
  const {
    dbManageAddBookingData,
    dbManageIsBookingAvailableResult,
    dbManageIsBookingAvailableError,
    showIneligibleDates,
  } = useGetDbManageAddBookingSelectors();
  const { allCustomers } = useGetAllCustomerSelectors();
  const [customerName, setCustomerName] = useState("");

  const dispatch = useDispatch();

  const handleCustomerSelectChange = (e) => {
    const selectedCustomer = allCustomers.find(
      (customer) => customer.name === e.target.value
    );

    setCustomerName(selectedCustomer?.name || "");

    const parsedCustomerCatDetails = JSON.parse(
      selectedCustomer?.catDetails || []
    );

    dispatch(
      setDbManageAddBookingData({
        ...dbManageAddBookingData,
        customerDocumentId: selectedCustomer?.$id || "",
        customerId: selectedCustomer?.customerId || "",
        customerName: selectedCustomer?.name || "",
        catDetails: selectedCustomer?.catDetails ?? "",
        catsInBooking:
          parsedCustomerCatDetails && parsedCustomerCatDetails.length === 1
            ? [parsedCustomerCatDetails[0].catsName]
            : [],
        checkInDate: "",
        checkInSlot: "",
        checkOutDate: "",
        checkOutSlot: "",
      })
    );
    if (dbManageIsBookingAvailableResult) {
      dispatch(resetDbManageIsBookingAvailableResult());
    }
    if (dbManageIsBookingAvailableError) {
      dispatch(resetDbManageIsBookingAvailableError());
    }
    if (showIneligibleDates) {
      dispatch(setShowIneligibleDates(false));
    }
  };

  return { customerName, handleCustomerSelectChange };
};

export default useHandleCustomerSelectChange;
