import { useSelector } from "react-redux";

import { selectSignedInCustomerDetailsSelectors } from "../../store/signed-in-customers-details/selectors";

const useGetSignedInCustomersDetailsSelectors = () => {
  const {
    signedInCustomersDetailsIsLoading,
    signedInCustomersDetailsResult,
    signedInCustomersDetailsError,
    signedInCustomersDetails,
  } = useSelector(selectSignedInCustomerDetailsSelectors);

  const {
    $id,
    name,
    email,
    address,
    phoneNumber,
    emergencyContactDetails,
    customerId,
    catteryId,
  } = signedInCustomersDetails ?? {};

  const customerDetailsFoUi = {
    customerId,
    name,
    email,
    address,
    phoneNumber,
    emergencyContactDetails,
  };

  const signedInCustomerDetailsForEditing = {
    $id,
    address,
    catteryId,
    customerId,
    email,
    emergencyContactDetails,
    name,
    phoneNumber,
  };

  return {
    signedInCustomersDetailsIsLoading,
    signedInCustomersDetailsResult,
    signedInCustomersDetailsError,
    signedInCustomersDetails,
    customerDetailsFoUi,
    signedInCustomerDetailsForEditing,
    customerId,
  };
};

export default useGetSignedInCustomersDetailsSelectors;
