import CellWithPotentiallyNoValue from "../../../components/tables/cell-with-potentially-no-value.component";

const ALL_CATS_TABLE_COLUMNS = [
  {
    Header: "cat name",
    accessor: "catsName",
  },

  {
    Header: "Owners name",
    accessor: "ownersName",
  },
  {
    Header: "feeding info",
    accessor: "catsFeedingInfo",
  },
  {
    Header: "vaccination status",
    accessor: "vaccinationStatus",
  },
  {
    Header: "medical info",
    accessor: "catsMedicalInfo",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "behaviour info",
    accessor: "catsBehaviourInfo",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "age",
    accessor: "catsAge",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "gender",
    accessor: "catsGender",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "breed",
    accessor: "catsBreed",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "cat ID",
    accessor: "catsId",
  },
  {
    Header: "cus ID",
    accessor: "customerId",
  },
];

export default ALL_CATS_TABLE_COLUMNS;
