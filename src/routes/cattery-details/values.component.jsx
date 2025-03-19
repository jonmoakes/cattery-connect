import useSendEmailToCattery from "./hooks/use-send-email-to-cattery";

import CustomSpan from "../../components/custom-span/custom-span.component";

import { Button } from "../../styles/button/button.styles";

const Values = ({ label, value }) => {
  const { sendEmailToCattery } = useSendEmailToCattery(value);
  const callNumber = `tel:${value}`;
  return (
    <>
      {label === "email" ? (
        <>
          <CustomSpan>( tap the button to email )</CustomSpan>
          <br />
          <Button
            className="teal email"
            type="button"
            onClick={sendEmailToCattery}
          >
            {value}
          </Button>
        </>
      ) : label === "phone" ? (
        <>
          <CustomSpan>( tap the number to call )</CustomSpan>
          <br />
          <br />
          <a className="black" href={callNumber}>
            {value}
          </a>
          <br />
        </>
      ) : label === "pricePerNight" ? (
        <>
          <CustomSpan>( at time of page load )</CustomSpan>
          <br />
          <br />
          <CustomSpan>£{(value / 100).toFixed(2)}</CustomSpan>
          <br />
        </>
      ) : label === "website" && value === null ? (
        "no website found"
      ) : label === "website" && value !== null ? (
        <>
          <CustomSpan>( tap link to visit page )</CustomSpan>
          <br />
          <br />
          <a className="black" href={value} target="_blank" rel="noreferrer">
            <CustomSpan type="lowercase">{value}</CustomSpan>
          </a>
          <br />
        </>
      ) : (
        value
      )}
    </>
  );
};

export default Values;
