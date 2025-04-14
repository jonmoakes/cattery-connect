const useCatteryDetailsFunctions = () => {
  const getLabel = (label) => {
    switch (label) {
      case "name":
        return "cattery name";
      case "email":
        return "contact email";
      case "phone":
        return "phone number";
      default:
        return label;
    }
  };

  return { getLabel };
};

export default useCatteryDetailsFunctions;
