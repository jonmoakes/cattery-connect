// hidden input to ensure form validation passes if no changes are made

const HiddenVaxInput = ({ vaccinationStatus }) => (
  <>
    {vaccinationStatus && (
      <input
        type="radio"
        name="vaccinationStatus"
        value={vaccinationStatus}
        checked
        style={{ display: "none" }}
        readOnly
      />
    )}
  </>
);

export default HiddenVaxInput;
