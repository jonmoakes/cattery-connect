const CellWithPotentiallyNoValue = ({ value }) => {
  return <>{!value ? "-" : value}</>;
};

export default CellWithPotentiallyNoValue;
