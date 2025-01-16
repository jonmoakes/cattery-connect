const CellWithPotentiallyNoValue = ({ value }) => {
  return <>{!value ? "not provided" : value}</>;
};

export default CellWithPotentiallyNoValue;
