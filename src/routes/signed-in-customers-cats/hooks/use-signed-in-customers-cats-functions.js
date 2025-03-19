const useSignedInCustomersCatsFunctions = () => {
  const getLabel = (label) => {
    switch (label) {
      case "catsName":
        return "cats name";
      case "catsId":
        return "cats id";
      case "catsFeedingInfo":
        return "feeding info";
      case "vaccinationStatus":
        return "vaccination status";
      case "catsBehaviourInfo":
        return "behaviour info";
      case "catsBreed":
        return "breed";
      case "catsGender":
        return "gender";
      default:
        return label;
    }
  };

  return { getLabel };
};

export default useSignedInCustomersCatsFunctions;
