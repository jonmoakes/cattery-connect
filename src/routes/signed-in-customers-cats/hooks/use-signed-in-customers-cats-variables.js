import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";

const useSignedInCustomersCatsVariables = () => {
  const { individualCustomersCats } = useGetIndividualCustomersCatsSelectors();
  const keysToRemove = [
    "$id",
    "$collectionId",
    "$createdAt",
    "$databaseId",
    "$permissions",
    "$updatedAt",
    "customerId",
    "catteryId",
    "ownersName",
  ];

  const filteredCatData =
    individualCustomersCats?.map((cat) =>
      Object.fromEntries(
        Object.entries(cat).filter(([key]) => !keysToRemove.includes(key))
      )
    ) || [];

  const orderedKeys = [
    "catsName",
    "catsId",
    "catsFeedingInfo",
    "vaccinationStatus",
    "catsMedicalInfo",
    "catsBehaviourInfo",
    "CatsAge",
    "catsBreed",
    "catsGender",
  ];

  return { filteredCatData, orderedKeys };
};

export default useSignedInCustomersCatsVariables;
