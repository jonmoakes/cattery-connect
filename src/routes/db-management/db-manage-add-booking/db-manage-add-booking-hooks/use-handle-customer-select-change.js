import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setDbManageAddBookingData } from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleCustomerSelectChange = () => {
  const { dbManageAddBookingData } = useGetDbManageAddBookingSelectors();
  const { allCustomers } = useGetAllCustomerSelectors();

  const [customerName, setCustomerName] = useState("");

  const dispatch = useDispatch();

  const handleCustomerSelectChange = (e) => {
    const selectedCustomer = allCustomers.find(
      (customer) => customer.name === e.target.value
    );

    setCustomerName(selectedCustomer?.name || "");

    dispatch(
      setDbManageAddBookingData({
        ...dbManageAddBookingData,
        customerDocumentId: selectedCustomer?.$id || "",
        customerName: selectedCustomer?.name || "",
        catDetails: selectedCustomer?.catDetails ?? "",
      })
    );
  };

  return { customerName, handleCustomerSelectChange };
};

export default useHandleCustomerSelectChange;
