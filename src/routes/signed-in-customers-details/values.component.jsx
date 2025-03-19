import CustomSpan from "../../components/custom-span/custom-span.component";

const Values = ({ label, value }) => (
  <>
    {label === "email" ? (
      <CustomSpan type="lowercase">{value}</CustomSpan>
    ) : (
      value
    )}
  </>
);

export default Values;
