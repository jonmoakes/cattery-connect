import { useDispatch } from "react-redux";

import useGetContactFormSelectors from "../../../hooks/selectors/use-get-send-email-selectors";

import { setContactFormDetails } from "../../../store/send-email/send-email.slice";

const useHandleContactFormDetailsChange = () => {
  const { contactFormDetails } = useGetContactFormSelectors();
  const dispatch = useDispatch();

  const handleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setContactFormDetails({ ...contactFormDetails, [name]: value }));
  };

  return { handleContactFormDetailsChange };
};

export default useHandleContactFormDetailsChange;
