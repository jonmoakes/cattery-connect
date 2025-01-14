import useOpenEmailClient from "./table-hooks/use-open-email-client";

import Emailcon from "../../assets/email-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const EmailIcon = ({ value }) => {
  const { openEmailClient } = useOpenEmailClient(value);

  return (
    <IconImage className="email" src={Emailcon} onClick={openEmailClient} />
  );
};

export default EmailIcon;
