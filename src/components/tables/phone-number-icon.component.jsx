import PhoneIcon from "../../assets/phone-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const PhoneNumberIcon = ({ value }) => {
  const callNumber = `tel:${value}`;

  return (
    <>
      <a href={callNumber}>
        <IconImage src={PhoneIcon} />
      </a>
    </>
  );
};

export default PhoneNumberIcon;
