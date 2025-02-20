import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { setContactFormDetails } from "../../../store/send-email/send-email.slice";

const useSetContactFormNameAndEmailIfSignedIn = () => {
  const { currentUser, name, email } = useGetCurrentUserSelectors();
  const { senderName, senderEmail } = useGetSendEmailSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (senderName && senderEmail)) return;

    dispatch(
      setContactFormDetails({
        senderName: name,
        senderEmail: email,
      })
    );
  });
};

export default useSetContactFormNameAndEmailIfSignedIn;
