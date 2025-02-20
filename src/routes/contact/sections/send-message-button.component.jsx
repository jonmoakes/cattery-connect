import useIsOnline from "../../../hooks/use-is-online";

import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";

import NetworkError from "../../../components/errors/network-error.component";

import { DisabledButton, Button } from "../../../styles/button/button.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SendMessageButton = () => {
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { isOnline } = useIsOnline();

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : !sendEmailIsLoading ? (
        <Button type="submit">Send Message</Button>
      ) : (
        sendEmailIsLoading && (
          <DisabledButton className="disabled">please wait...</DisabledButton>
        )
      )}
    </>
  );
};

export default SendMessageButton;
