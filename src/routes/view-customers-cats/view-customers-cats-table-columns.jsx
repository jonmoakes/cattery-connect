import CellWithPotentiallyNoValue from "../../components/tables/cell-with-potentially-no-value.component";

const VIEW_CUSTOMERS_CATS_TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "catsName",
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
    Header: "age",
    accessor: "catsAge",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "behaviour info",
    accessor: "catsBehaviourInfo",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "breed",
    accessor: "catsBreed",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "gender",
    accessor: "catsGender",
    Cell: ({ value }) => <CellWithPotentiallyNoValue value={value} />,
  },
  {
    Header: "cat ID",
    accessor: "catsId",
  },
];

export default VIEW_CUSTOMERS_CATS_TABLE_COLUMNS;
