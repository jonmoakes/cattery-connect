const useSendEmailToCattery = (value) => {
  const subject = encodeURIComponent("Enquiry About Your Cattery");

  const sendEmailToCattery = () => {
    window.location.href = `mailto:${value}?Subject=${subject}`;
  };

  return { sendEmailToCattery };
};

export default useSendEmailToCattery;
